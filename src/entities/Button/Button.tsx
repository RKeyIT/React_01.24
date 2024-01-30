import { FC } from 'react';
import styles from './Button.module.css';

interface IButtonProps {
  content: string;
}

export const Button: FC<IButtonProps> = ({ content }) => {
  return (
    <button type="button" title="button" className={styles.Button}>
      {content}
    </button>
  );
};
