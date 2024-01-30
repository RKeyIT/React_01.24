import { FC } from 'react'
import styles from './Button.module.css'

interface IButtonProps {
  content: string
  style?: 'accept' | 'decline' | 'common'
}

export const Button: FC<IButtonProps> = ({ content, style = 'common' }) => {
  return (
    <button type="button" title="button" className={`${styles.Button} ${styles[style]}`}>
      {content}
    </button>
  )
}
