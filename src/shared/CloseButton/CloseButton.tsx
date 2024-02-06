import styles from './CloseButton.module.css'
import { FC } from 'react'

interface IProps {
  title?: string
  callback?: () => void
}

export const CloseButton: FC<IProps> = ({ title = 'close', callback }) => {
  return (
    <button onClick={callback} type="button" title={title} className={styles.CloseButton}>
      x
    </button>
  )
}
