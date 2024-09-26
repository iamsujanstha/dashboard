import React, { useState } from 'react';
import Sidebar from '../../components/core/sidebar/Sidebar'
import styles from './mainLayout.module.scss';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={styles.mainLayout}
      style={{
        '--sidebar-width': isCollapsed ? '60px' : '260px'
      } as React.CSSProperties}
    >
      <aside className={styles.asideSection}>
        <Sidebar isCollapsed={isCollapsed} onToggle={handleToggle} />
      </aside>
      <section className={styles.mainSection}>
        {children}
      </section>
    </div>
  );
};

export default MainLayout;
