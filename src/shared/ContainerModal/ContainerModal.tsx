import { AnimatePresence, motion } from 'framer-motion'
import { ButtonColorType } from '../../global.types'
import { Button } from '../Button/Button'
import { TextField } from '../TextField/TextField'
import styles from './ContainerModal.module.css'
import { FC } from 'react'

interface IProps {
  textContent: string
  confirm?: () => void
  cancel?: () => void
  confirmationColor?: ButtonColorType
  cancelColor?: ButtonColorType
}

export const ContainerModal: FC<IProps> = ({
  textContent,
  confirmationColor,
  cancelColor,
  confirm,
  cancel
}) => {
  return (
    <AnimatePresence>
      <motion.div className={styles.ContainerModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}>
        <motion.div className={styles.confirmation}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0}}
              exit={{ opacity: 0, y: -100 }}>
          <TextField>{textContent}</TextField>
          {cancel && <Button content="Cancel" style={cancelColor || 'white'} callback={cancel} />}
          {confirm && (
            <Button content="Confirm" style={confirmationColor || 'white'} callback={confirm} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
