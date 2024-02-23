import { ButtonColorType } from '../../global.types'
import { Button } from '../../shared/Button/Button'
import { TextField } from '../../shared/TextField/TextField'
import styles from './FullSizeModal.module.css'
import { FC } from 'react'

interface IProps {
  textContent: string
  confirm?: () => void
  cancel?: () => void
  confirmationColor?: ButtonColorType
  cancelColor?: ButtonColorType
}

export const FullSizeModal: FC<IProps> = ({
  textContent,
  confirmationColor,
  cancelColor,
  confirm,
  cancel
}) => {
  return (
    <div className={styles.FullSizeModal}>
      <div className={styles.confirmation}>
        <TextField>{textContent}</TextField>
        {cancel && <Button content="Cancel" style={cancelColor || 'white'} callback={cancel} />}
        {confirm && (
          <Button content="Confirm" style={confirmationColor || 'white'} callback={confirm} />
        )}
      </div>
    </div>
  )
}
