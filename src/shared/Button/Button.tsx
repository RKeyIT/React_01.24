import { FC } from 'react'
import styles from './Button.module.css'

interface IButtonProps {
  content: string
  callback: () => void
  style?: 'green' | 'red' | 'white'
}

export const Button: FC<IButtonProps> = ({ content, callback, style = 'white' }) => {
  return (
    <button onClick={callback} type="button" className={`${styles.Button} ${styles[style]}`}>
      {content}
    </button>
  )
}
