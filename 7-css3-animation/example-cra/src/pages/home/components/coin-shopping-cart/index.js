import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function CoinShoppingCard() {
  const [isSignIn, setSignIn] = useState(false)
  const targetNumRef = useRef(null)
  const originNumRef = useRef(null)
  const [movePosition, setMovePosition] = useState({})
  const [ positionIndex, setPositionIndex ] = useState(2)

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
          setSignIn(false)
          setMovePosition({})
        }, 4000)
      }
    }
    isSignIn && handleCoinAnimation()
  }, [isSignIn])

  const onClickCard = (index) => {
    setSignIn(false)
    console.log('index', index)
    setPositionIndex(index)
  }

  return (
    <div className={cx('shopping-cart')}>
      <div className={cx('shopping-cart-wrap')}>
        <div className={cx('coin-icon')} ref={targetNumRef}></div>
        <div className={cx('my-coin')}>我的C币</div>
      </div>

      <div className={cx('everyday-list-2')}>
        {
          [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            let isCurrentAni = positionIndex === index && isSignIn

            return (
              <div className={cx('sign-in-everyday')} key={index} onClick={() => onClickCard(index)}>
                <div className={cx('sign-in-card', index < positionIndex && 'already-sign-in-card', isCurrentAni && 'current-sign-in-card')}>
                  <div className={cx('sign-in-add-num')}>{index === positionIndex && '+5'}</div>
                  <div className={cx('sign-in-coin-icon', index < positionIndex && 'already-sign-in-icon')} ref={positionIndex === index ? originNumRef : null}>
                    <span></span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={cx('line')}><button onClick={() => setSignIn(!isSignIn)}>{isSignIn ? '重置' : '添加'}</button></div>
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
      <div className={cx('auto-wrap')}>
        <div className={cx('x-axis')}>
          <div className={cx('y-axis')}></div>
        </div>
      </div>
    </div>
  )
}