import { Icons } from '../../../utils/iconConfig'
import styles from './header.module.scss'
import ToggleTheme from '../../core/toggleTheme/ToggleTheme'

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