import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function CoinFrame(props) {
  
  return (
    <div className={cx('coin-frame')}>
      <span></span>
    </div>
  )
}