import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function DayBgColor(props) {
  return (
    <div className={cx('day-bg-wrap')}>
      <div className={cx('day-bg-color')}></div>
      <div className={cx('day-bg-color')}></div>
    </div>
  )
}