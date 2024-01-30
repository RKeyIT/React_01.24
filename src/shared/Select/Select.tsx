import { FC } from 'react';
import { IObjectWithOptions, ISelectOption } from '../../global.types';

interface IProps {
  optionObject: IObjectWithOptions;
}

export const Select: FC<IProps> = ({ optionObject }) => {
  const options: ISelectOption[] = [];

  for (const key in optionObject) {
    options.push(optionObject[key]);
  }

  return (
    <select title="select">
      {options.map((el, index) => {
        return <option key={el.id + index}>{el.name}</option>;
      })}
    </select>
  );
};
