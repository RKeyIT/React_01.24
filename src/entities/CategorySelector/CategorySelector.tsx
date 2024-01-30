import { ISelectOption, QuizCategories } from '../../global.types';
import { Select } from '../../shared/Select/Select';
import { FC } from 'react';

export const CategorySelector: FC = () => {
  const options: ISelectOption[] = [];

  for (const key in QuizCategories) {
    options.push(QuizCategories[key]);
  }

  return <Select options={options} />;
};
