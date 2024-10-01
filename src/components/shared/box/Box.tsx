import React, { ReactNode } from 'react';
import styles from './box.module.scss';

interface IBoxProps {
  children: ReactNode,
  width?: string
}

const Box: React.FC<IBoxProps> = ({
  children,
  width
}) => {
  return (
    <div className={styles.box} style={{ width }}>
      {children}
    </div>
  );
};

export default Box;
