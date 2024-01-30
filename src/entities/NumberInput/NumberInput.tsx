import { ChangeEvent, FC, useState } from 'react';
import styles from './NumberInput.module.css';

interface IProps {
  min?: number;
  max?: number;
  placeholder?: string;
}

type StateType = number;

export const NumberInput: FC<IProps> = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  placeholder = 'Input number',
}) => {
  if (max < min) {
    throw new Error('Received invalid values: max should be more than min');
  }

  const [value, setValue] = useState<StateType>(min < 0 ? 0 : min);

  const changeHandler = (Event: ChangeEvent<HTMLInputElement>) => {
    const newValue = +Event.target.value;

    if (isNaN(newValue) || newValue < min || newValue > max) return;

    setValue(newValue);
  };

  return (
    <input
      type="number"
      onChange={changeHandler}
      value={value}
      placeholder={placeholder}
      className={styles.NumberInput}
    />
  );
};