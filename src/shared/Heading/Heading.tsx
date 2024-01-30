import styles from './Heading.module.css'
import { FC } from 'react'

interface IProps {
    pageName: string;
    additionalText?: string;
}

export const Heading: FC<IProps> = ({pageName, additionalText}) => {
  return (
    <div className={styles.Heading}>
        <h2 className={styles.h2}>{pageName}</h2>
        {additionalText && <h2 className={styles.h2}>{additionalText}</h2>}
    </div>
  );
};