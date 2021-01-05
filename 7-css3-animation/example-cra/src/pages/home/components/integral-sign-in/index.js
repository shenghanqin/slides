import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'
import dayjs from "dayjs";

const cx = classnames.bind(styles)

/**
 * 日期格式化，基于day.js 实现，因为day.js没有考虑firefox的兼容性，所以增加了判断和兼容逻辑
 * @param  {string} date 传入的合法日期字符串
 * @returns {string} 格式化后的日期字符串
 */
export let dateFormat = (date = '') => {
  let ua = navigator.userAgent.toLowerCase()

  return /firefox/i.test(ua) // 针对firefox浏览器设备
    ? date
    : date.replace(/-/g, '/').replace(/T/g, ' ')
}

function getFirstNotSignInIndex(arr) {
  let markIndex
  for (let i = 0; i < arr.length; i++) {
    const { hasSignIn } = arr[i]
    if (!hasSignIn) return markIndex = i
  }
  return markIndex
}

function RenderIncreaseNum({ originCount, gapNumber = 1, isFinish = false }) {
  const countArr = String(originCount).split('')
  const countArr2 = String(Number(originCount) + gapNumber).split('')
  const isLengthDiff = countArr.length !== countArr2.length

  return (
    <div className={cx('days-num', { 'is-signed': isFinish })}>
      {
        countArr2.map((item, index) => {
          const prevNum = countArr[isLengthDiff ? index + (countArr.length - countArr2.length) : index]
          const isNowDiff = item !== prevNum
          return (
            <div
              key={index}
              className={cx(
                'num-small',
                {
                  'num-to-diff': isNowDiff,
                  'num-small-first': !prevNum,
                  'num-small-1': !prevNum && (item === '1'),
                  'num-small-2': !prevNum && (item !== '1')
                }
              )}
            >
              <div className={cx('num-small-dot')}>{prevNum || '\u00A0'}</div>
              <div className={cx('num-small-dot')}>{item}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default function SignIn(props) {

  const { balanceInfo } = props
  const { balance, expireDate, expiringBalance, continueSignCount, hasSignIn, signCycleList = [] } = balanceInfo

  const targetNumRef = useRef(null)
  const originNumRef = useRef(null)
  const [movePosition, setMovePosition] = useState({})
  const [isSignIn, setIsSignIn] = useState(false)

  let firstNotSignInIndex = getFirstNotSignInIndex(signCycleList)
  let currentAddBalance = signCycleList[firstNotSignInIndex].balance
  let expireTime = dayjs(dateFormat(expireDate)).format('MM-DD')

  useEffect(() => {
    const handleCoinAnimation = () => {
      if (targetNumRef && targetNumRef.current) {
        let { top: targetTop, left: targetLeft } = targetNumRef.current.getBoundingClientRect()
        let { top: originTop, left: originLeft } = originNumRef.current.getBoundingClientRect()
        let oWidth = originLeft - targetLeft
        let oHeight = originTop - targetTop
        setMovePosition({
          top: targetTop + 'px',
          left: targetLeft + 'px',
          width: oWidth + 'px',
          height: oHeight + 'px',
        })
        setTimeout(() => {
          setMovePosition({})
        }, 4000)
      }
    }
    isSignIn && handleCoinAnimation()
  }, [isSignIn])

  const handleSignIn = async () => {
    if (isSignIn) return
    setIsSignIn(true)
  }

  return (
    <>
      <div className={cx('header-container')}>
        {/* {IS_IOS_CCTALK && <HyalineHead />} */}
        <div className={cx('my-coin-container')}>
          <div className={cx('my-coin-icon')}>
            <div className={cx('coin-icon')} ref={targetNumRef}></div>
            <div className={cx('my-coin')}>我的C币</div>
          </div>
        </div>
        <div className={cx('integral-num-container')}>
          {
            hasSignIn
              ? <div className={cx('days-num')}>{balance}</div>
              : <RenderIncreaseNum originCount={balance} gapNumber={currentAddBalance} isFinish={isSignIn} />
          }
        </div>
        {!!expiringBalance && <div className={cx('due-tips')}>{expiringBalance}C币将在{expireTime}过期</div>}
      </div>
      <div className={cx('sign-in-container')}>
        <div className={cx('everyday-list')}>
          {
            signCycleList.map((item, index) => {
              let { dayNumber, balance, hasSignIn } = item
              let isCurrentAni = firstNotSignInIndex === index && isSignIn

              return (
                <div className={cx('sign-in-everyday')} key={index}>
                  <div className={cx('sign-in-card', hasSignIn && 'already-sign-in-card', isCurrentAni && 'current-sign-in-card')}>
                    <div className={cx('sign-in-add-num', hasSignIn && 'already-sign-in-add-num')}>
                      <span className={cx('add-num-1')}>+{balance}</span>
                      <span className={cx('add-num-2')}>+{balance}</span>
                    </div>
                    <div className={cx('sign-in-coin-icon', hasSignIn && 'already-sign-in-icon')} ref={firstNotSignInIndex === index ? originNumRef : null}>
                      <span></span>
                    </div>
                  </div>
                  <div className={cx('sign-in-day-num')}>{dayNumber > 999 ? '999天' : `${dayNumber}天`}</div>
                </div>
              )
            })
          }
        </div>
        <div className={cx('continuous-sign-in')}>
          <div className={cx('continuous')}>
            <div className={cx('sign-in-continuous-days')}>
              已连续签到
              {
                hasSignIn
                  ? (
                    <div className={cx('days-num')}>
                      <div className={cx('num-small')}>
                        <div className={cx('num-small-dot')}>{continueSignCount}</div>
                      </div>
                    </div>
                  )
                  : <RenderIncreaseNum originCount={continueSignCount} isFinish={isSignIn} />
              }
              天
            </div>
          </div>
          <div
            className={cx('immediately-sign-in-btn', { 'already-sign-in-btn': isSignIn || hasSignIn })}
            onClick={handleSignIn}
          >
            <div className={cx('in-btn', 'in-btn-1')}>立即签到</div>
            <div className={cx('in-btn', 'in-btn-2')}>已签到，明日再来吧</div>
          </div>
        </div>
      </div>
      {!!movePosition.top && (
        <div className={cx('move-wrap')} style={movePosition}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
            return (
              <div key={item} className={cx('move-item-row')}>
                <div key={item} className={cx('move-item-td')}></div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )

}