import ToggleTheme from '@/components/core/toggleTheme/ToggleTheme'
import styles from './header.module.scss'
import { Icons } from '@/utils/iconConfig'


const Header = () => {
  return (
    <header className={styles.header}>
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