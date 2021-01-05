import React, { useState } from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function ButtonSignIn(props) {

  const [isSignIn, setSignIn] = useState(false)

  const toggleSign = () => setSignIn(!isSignIn)

  const handleSignIn = () => setSignIn(true)
  const handleSignOff = () => setSignIn(false)

  return (
    <>
      <div className={cx('button-sign-toggle', { 'used': isSignIn })} onClick={toggleSign}>
        {isSignIn ? '取消签到' : '立即签到'}
      </div>
      <div className={cx('button-sign-in', { 'used': isSignIn })}>
        <div className={cx('in-btn', 'in-btn-1')} onClick={handleSignIn}>立即签到</div>
        <div className={cx('in-btn', 'in-btn-2')} onClick={handleSignOff}>取消签到</div>
      </div>
    </>
  )
}