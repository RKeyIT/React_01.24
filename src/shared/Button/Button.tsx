import { FC } from 'react'
import styles from './Button.module.css'

interface IButtonProps {
  content: string
  callback?: () => void
  style?: 'green' | 'red' | 'white'
  type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<IButtonProps> = ({ content, callback, style = 'white', type = 'button' }) => {
  return (
    <button onClick={callback} type={type} className={`${styles.Button} ${styles[style]}`}>
      {content}
    </button>
  )
}
