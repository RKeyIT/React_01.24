import styles from './CloseButton.module.css'
import { FC } from 'react'

interface IProps {
  title?: string
}

export const CloseButton: FC<IProps> = ({title = 'close'}) => {
  return (
    <button type='button' title={title} className={styles.CloseButton}>
        x
    </button>
  );
};