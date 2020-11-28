import React, { useState } from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)


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

export default function NumberIncrease(props) {
  const [balance, setBalance] = useState(992)
  const [currentAddBalance, setCurrentAddBalance] = useState(11222)
  const [isSignIn, setSignIn] = useState(false)

  const changeBlance = (event) => {
    let { value } = event.target
    console.log(value)
    setBalance(parseInt(value))
  }
  const changeAddBalance = (event) => {
    let { value } = event.target
    console.log(value)
    setCurrentAddBalance(parseInt(value))
  }

  console.log('balance currentAddBalance', balance, currentAddBalance)

  return (
    <div className={cx('number-increase')}>
      <RenderIncreaseNum originCount={balance} gapNumber={currentAddBalance} isFinish={isSignIn} />
      <div className={cx('line')}>底数：<input onChange={changeBlance} value={balance} /></div>
      <div className={cx('line')}>加数：<input value={currentAddBalance} onChange={changeAddBalance} /></div>
      <div className={cx('line')}><button onClick={() => setSignIn(!isSignIn)}>{isSignIn ? '重置' : '添加'}</button></div>
    </div>
  )
}