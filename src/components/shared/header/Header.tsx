import React from 'react'
import { Icons } from '../../../utils/iconConfig'
import Styles from './header.module.scss'
import ToggleTheme from '../../core/toggleTheme/ToggleTheme'

const Header = () => {
  return (
    <header className={Styles.header}>
      <h1>Dashboard</h1>
      <div>
        <ToggleTheme />
        <Icons.BellIcon fontSize={28} />
        <Icons.AiOutlineUser size='28' />
      </div>
    </header>
  )
}

export default Header