import { FC } from 'react'
import styles from './Answers.module.css'

interface IProps {
    type: 'boolean' | 'multiply'
}

// TODO - Rename to answers
export const Answers: FC<IProps> = ({type}) => {
    if (type === 'multiply') {
        return (
            <div className={styles.Checkbox}>
                <div className={styles.answer}>
                    <input className={styles.hiddenInput} type="radio" name="checkbox" id="1" />
                    <label className={styles.checkboxLabel} title='Answer 1' htmlFor='1'>
                        1. answer 1
                    </label>
                </div>
                <div className={styles.answer}>
                    <input className={styles.hiddenInput} type="radio" name="checkbox" id="2" />
                    <label className={styles.checkboxLabel} title='Answer 2' htmlFor='2'>
                        2. answer 2
                    </label>
                </div>
                <div className={styles.answer}>
                    <input className={styles.hiddenInput} type="radio" name="checkbox" id="3" />
                    <label className={styles.checkboxLabel} title='Answer 3' htmlFor='3'>
                        3. answer 3
                    </label>
                </div>
                <div className={styles.answer}>
                    <input className={styles.hiddenInput} type="radio" name="checkbox" id="4" />
                    <label className={styles.checkboxLabel} title='Answer 4' htmlFor='4'>
                        4. answer 4
                    </label>
                </div>
            </div>
          );
    } else {
        return (
            <div className={styles.Radio}>
                <div className={styles.answer}>
                    <input className={styles.hiddenInput} type="radio" name="radio" id="5" />
                    <label className={`${styles.label} ${styles.trueLabel}`} title='True' htmlFor='5'>
                        True
                    </label>
                </div>
                <div className={styles.answer}>
                    <input className={styles.hiddenInput} type="radio" name="radio" id="6" />
                    <label className={`${styles.label} ${styles.falseLabel}`} title='False' htmlFor='6'>
                        False
                    </label>
                </div>
            </div>
        )
    }
};