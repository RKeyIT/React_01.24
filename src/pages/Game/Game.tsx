import { ProgressBar } from '../../shared/ProgressBar/ProgressBar';
import { Checkbox } from '../../shared/QuestionWindow/Answers/Checkbox';
import { TrueFalse } from '../../shared/QuestionWindow/Answers/TrueFalse';
import { QuestionWindow } from '../../shared/QuestionWindow/QuestionWindow';
import { Timer } from '../../shared/Timer/Timer';
import styles from './Game.module.css'
import { FC } from 'react'

export const Game: FC = () => {
  return (
    <div className={styles.Game}>
      <ProgressBar />
      <Timer />
      <QuestionWindow />
      <div className={styles.answers}>
        <TrueFalse />
        <Checkbox />
      </div>
    </div>
  );
};