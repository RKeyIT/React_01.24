import styles from './CloseButton.module.css'
import { FC } from 'react'

export const CloseButton: FC = () => {
  return (
    <button className={styles.CloseButton}>
        x
    </button>
  );
};