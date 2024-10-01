import React, { ReactNode } from 'react';
import styles from './box.module.scss';

interface IBoxProps {
  children: ReactNode,
  width?: string,
  height?: string
}

const Box: React.FC<IBoxProps> = ({
  children,
  width,
  height
}) => {
  return (
    <div className={styles.box} style={{ width, minHeight: height }}>
      {children}
    </div>
  );
};

export default Box;
