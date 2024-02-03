import { FC } from 'react'
import { Button } from '../../Button/Button';

export const TrueFalse: FC = () => {
  return (
    <>
        <Button style='green' content='True'/>
        <Button style='red' content='False'/>
    </>
  );
};