import React, { ReactNode } from 'react';
import styles from './card.module.scss';

interface ICardProps {
  children: ReactNode,
  width?: string
}

const Card: React.FC<ICardProps> = ({
  children,
  width
}) => {
  return (
    <div className={styles.card} style={{ width }}>
      {children}
    </div>
  );
};

export default Card;
