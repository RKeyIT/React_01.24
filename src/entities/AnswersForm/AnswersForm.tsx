import { Button } from '../../shared/Button/Button';
import styles from './AnswersForm.module.css'
import { ChangeEvent, FC, FormEvent } from 'react'

interface IProps {
    onSubmit: (e: FormEvent<HTMLFormElement>) => any,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    answers: string[],
}

export const AnswersForm: FC<IProps> = (props) => {
    const {onSubmit, onChange, answers} = props
    const randomSortedAnswers = answers.sort(() => Math.random() - 0.5)

  return (
    <form onSubmit={onSubmit} className={styles.AnswersForm}>
        {randomSortedAnswers.map((answer, index) => {
            return <div key={'SingleAnswer' + index}>
                <input onChange={onChange} className={styles.hiddenInput} value={answer} type="radio" name="radio" id={String(index)} />
                <label className={styles.label} title={`${answer}`} htmlFor={String(index)}>
                    {answer}
                </label>
            </div>
        })}
        <Button type='submit' content="Accept" style="green" />
    </form>
  );
};