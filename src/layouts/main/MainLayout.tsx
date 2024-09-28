import React from 'react';
import styles from './mainLayout.module.scss';
import Sidebar from '@/components/core/sidebar/Sidebar';
import { useSidebarContext } from '@/hooks/useSidebarContext';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useSidebarContext();

  return (
    <div
      className={styles.mainLayout}
      style={{
        '--sidebar-width': isCollapsed ? '60px' : '260px'
      } as React.CSSProperties}
    >
      <aside className={styles.asideSection}>
        <Sidebar />
      </aside>
      <section className={styles.mainSection}>
        {children}
      </section>
    </div>
  );
};

export default MainLayout;
