import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function SignDayBg(props) {

  return (
    <div className={cx('sign-day-wrap')}>
      <div className={cx('sign-day-card')}></div>
      <div className={cx('sign-day-card')}></div>
    </div>
  )
}