// MainLayout.tsx
import { ReactNode, useState } from 'react';
import Sidebar from '../../components/core/sidebar/Sidebar';
import styles from './mainLayout.module.scss'


const MainLayout = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <main className={styles.mainLayout}>
      <aside className={styles.asideSection} style={{ width: isCollapsed ? '60px' : '250px' }}>
        <Sidebar isCollapsed={isCollapsed} onToggle={handleToggle} />
      </aside>
      <section className={styles.mainSection}>
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
