import { Icons } from '../../../utils/iconConfig';
import styles from './sidebar.module.scss';
import clsx from 'clsx';
import { sidebarData } from './sidebarConfig';
import Tooltip from '../../shared/tooltip/Tooltip';

interface ISidebar {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isCollapsed, onToggle }: ISidebar) => {

  return (
    <div className={clsx(styles.container, { [styles.collapsed]: isCollapsed })}>
      <div className={styles.top}>
        <span className={styles.logo}>
          <Icons.Logo fontSize={28} />
          <span>JoBins</span>
        </span>
        <span className={clsx(styles.toggleIcon, { [styles.collapsed]: isCollapsed })}><Icons.ToggleIcon fontSize={24} cursor='pointer' onClick={onToggle} /></span>
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
