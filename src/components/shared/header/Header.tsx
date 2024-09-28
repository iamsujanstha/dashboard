import ToggleTheme from '@/components/core/toggle-theme/ToggleTheme'
import styles from './header.module.scss'
import { Icons } from '@/utils/iconConfig'
import { useSidebarContext } from '@/hooks/useSidebarContext'
import { useState } from 'react'
// import NotificationCard from '@/components/core/notifcation-card/NotificationCard'


const Header = () => {
  const { isCollapsed, toggleSidebar } = useSidebarContext();
  const [, setShowNotification] = useState(false);

  return (
    <header className={styles.header}>
      <h1>Dashboard</h1>
      <div className={styles.headerRight}>
        <ToggleTheme />
        <Icons.BellIcon fontSize={28} className={styles.notification} onClick={() => setShowNotification(true)} />
        <Icons.AiOutlineUser size='28' />
        <span className={styles.count}>20</span>
      </div>
      {isCollapsed &&
        <span className={styles.toggle} onClick={toggleSidebar}>
          <Icons.ToggleIcon fontSize={24} />
        </span>
      }

      {/* <NotificationCard /> */}
    </header>
  )
}

export default Header