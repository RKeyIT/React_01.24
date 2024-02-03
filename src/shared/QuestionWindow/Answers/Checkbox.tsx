import { FC } from 'react'
import styles from './Checkbox.module.css'

export const Checkbox: FC = () => {
  return (
    <div className={styles.Checkbox}>
        <div className={styles.answer}>
            <label htmlFor='1'>1. </label>
            <input title='1' type="checkbox" name="1" id="1" />
        </div>
        <div className={styles.answer}>
            <label htmlFor='2'>2. </label>
            <input type="checkbox" title='2' name="2" id="2" />
        </div>
        <div className={styles.answer}>
            <label htmlFor='3'>3. </label>
            <input type="checkbox" title='3' name="3" id="3" />
        </div>
        <div className={styles.answer}>
            <label htmlFor='4'>4. </label>
            <input type="checkbox" title='4' name="4" id="4" />
        </div>
    </div>
  );
};