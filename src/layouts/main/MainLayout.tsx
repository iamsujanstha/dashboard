// MainLayout.tsx
import { ReactNode } from 'react';
import Sidebar from '../../components/core/sidebar/Sidebar';
import styles from './mainLayout.module.scss'


const MainLayout = ({ children }: { children: ReactNode }) => {
  console.log(styles)
  return (
    <main className={styles.mainLayout}>
      <aside className={styles.asideSection}>
        <Sidebar />
      </aside>
      <section className={styles.mainSection}>
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
