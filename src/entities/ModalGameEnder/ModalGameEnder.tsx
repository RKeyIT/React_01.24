import { Button } from '../../shared/Button/Button';
import { TextField } from '../../shared/TextField/TextField';
import styles from './ModalGameEnder.module.css'
import { FC } from 'react'

interface IProps {
  close: () => void,
  cancel: () => void,
}

export const ModalGameEnder: FC<IProps> = ({close, cancel}) => {
  return (
    <div className={styles.ModalGameEnder}>
        <div className={styles.confirmation}>
            <TextField>
                Are you sure you want to end the game?
            </TextField>
            <Button content='Cancel' callback={cancel} />
            <Button content='Confirm' style='red' callback={close} />
        </div>
    </div>
  );
};