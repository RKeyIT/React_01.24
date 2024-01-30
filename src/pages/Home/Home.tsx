import { NumberInput } from '../../entities/NumberInput/NumberInput';
import styles from './Home.module.css';

/* 
    1. - OK - Number input for “number of questions”. Limit from 5 to 15
    2. Select input for “category” with required values
    3. Select input for “difficulty” with required values
    4. Select input for “type” with required values
    5. Select input for “time” with values: 1m, 2m, 5m
    6. Button “Start quiz”
    7. Button “See my statistics”
*/

export const Home = () => {
  return (
    <div className={styles.Home}>
      <NumberInput min={5} max={15} />
    </div>
  );
};
