import { FC } from 'react';
import { ISelectOption } from '../../global.types';

interface IProps {
  options: ISelectOption[];
}

export const Select: FC<IProps> = ({ options }) => {
  return (
    <select title="select">
      {options.map((el, index) => {
        return <option key={el.id + index}>{el.name}</option>;
      })}
    </select>
  );
};
