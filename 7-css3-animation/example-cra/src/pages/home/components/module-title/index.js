import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function ModuleTitle(props) {
  const { title = '' } = props

  return (
    <div className={cx('module-title')}>
      {title}
    </div>
  )
}