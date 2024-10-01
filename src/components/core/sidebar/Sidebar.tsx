import styles from './sidebar.module.scss';
import clsx from 'clsx';
import { sidebarData } from './sidebarConfig';
import Tooltip from '@/components/shared/tooltip/Tooltip';
import { Icons } from '@/utils/iconConfig';
import { useSidebarContext } from '@/hooks/useSidebarContext';

const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebarContext();
  console.log({ isCollapsed })
  return (
    <div className={clsx(styles.container, { [styles.collapsed]: isCollapsed })}>
      <div className={styles.top}>
        <span className={styles.logo}>
          <Icons.Logo fontSize={28} />
          {!isCollapsed && <span>JoBins</span>}
        </span>
        {!isCollapsed && <span className={clsx(styles.toggleIcon, { [styles.collapsed]: isCollapsed })}>
          <Icons.ToggleIcon fontSize={24} cursor='pointer' onClick={toggleSidebar} />
        </span>
        }
      </div>
      {sidebarData.map((section, index) => (
        <nav key={index} className={clsx(styles.menuItems, { [styles.collapsed]: isCollapsed })}>
          {!isCollapsed && <p>{section.title.toUpperCase()}</p>}
          <ul>
            {section.items.map((item, idx) => (
              <>
                <li key={idx} className={clsx({ [styles.collapsed]: isCollapsed })} data-tooltip-id={item.name}>
                  <item.icon fontSize={22} className={styles.icon} />
                  {!isCollapsed && <span>{item.name}</span>}
                </li>
                {isCollapsed &&
                  <Tooltip id={item.name} background="#041745" color="white" place="right" >
                    {item.name}
                  </Tooltip>
                }
              </>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};

export default Sidebar;
