import { FC } from 'react'
import styles from './Button.module.css'
import { ButtonColorType } from '../../global.types'

interface IButtonProps {
  content: string
  callback?: () => void
  style?: ButtonColorType
  type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<IButtonProps> = ({
  content,
  callback,
  style = 'white',
  type = 'button'
}) => {
  return (
    <button onClick={callback} type={type} className={`${styles.Button} ${styles[style]}`}>
      {content}
    </button>
  )
}
