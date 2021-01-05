import React, { useState } from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)


function RenderIncreaseNum({ originNumber, gapNumber = 1, isFinish = false }) {
  const originString = String(originNumber)
  const targetString = String(Number(originNumber) + gapNumber)
  const lengthDiff = targetString.length - originString.length

  return (
    <div className={cx('days-num', { 'is-signed': isFinish })}>
      {
        targetString.split('').map((nextItem, index) => {

          const prevNum = originString[lengthDiff > 0 ? index - lengthDiff : index]

          return (
            <div
              key={index}
              className={cx(
                'num-symbol',
                {
                  'num-symbol-first': !prevNum,
                }
              )}
            >
              <div className={cx('num-symbol-dot')}>
                {prevNum || '\u00A0'}<br />{nextItem}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default function NumberIncrease(props) {
  const [balance, setBalance] = useState(882)
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
      <RenderIncreaseNum originNumber={balance} gapNumber={currentAddBalance} isFinish={isSignIn} />
      <div className={cx('line')}>底数：<input onChange={changeBlance} value={balance} /></div>
      <div className={cx('line')}>加数：<input value={currentAddBalance} onChange={changeAddBalance} /></div>
      <div className={cx('line')}><button onClick={() => setSignIn(!isSignIn)}>{isSignIn ? '重置' : '添加'}</button></div>
    </div>
  )
}