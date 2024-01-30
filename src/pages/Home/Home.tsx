import { Button } from '../../shared/Button/Button';
import { NumberInput } from '../../entities/NumberInput/NumberInput';
import styles from './Home.module.css';
import { Select } from '../../shared/Select/Select';
import {
  QuizCategories,
  QuizDifficulties,
  QuizTime,
  QuizType,
} from '../../global.types';

/* 
    1. - OK - Number input for “number of questions”. Limit from 5 to 15
    2. - OK - Select input for “category” with required values 
    3. - OK - Select input for “difficulty” with required values (any || easy || medium || hard)
    4. - OK - Select input for “type” with required values (any || multiple choice || true/false)
    5. - OK - Select input for “time” with values: 1m, 2m, 5m
    6. - OK - Button “Start quiz”
    7. - OK - Button “See my statistics”
    8. Style everything!
*/

export const Home = () => {
  return (
    <div className={styles.Home}>
      <NumberInput min={5} max={15} />
      <Select optionObject={QuizCategories} />
      <Select optionObject={QuizDifficulties} />
      <Select optionObject={QuizType} />
      <Select optionObject={QuizTime} />
      <Button content="Start quiz" />
      <Button content="See my statistics" />
    </div>
  );
};
