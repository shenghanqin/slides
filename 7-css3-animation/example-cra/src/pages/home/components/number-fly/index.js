import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function NumberFly(props) {
  const balance = 5

  return (
    <div className={cx('number-fly')}>
      <div className={cx('fly-num-1')}>+{balance}</div>
      <div className={cx('fly-num-2')}>+{balance}</div>
    </div>
  )
}