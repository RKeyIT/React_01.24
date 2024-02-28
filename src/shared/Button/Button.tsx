import { FC } from 'react'
import styles from './Button.module.css'
import { ButtonColorType } from '../../global.types'
import { motion } from 'framer-motion'

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
    <motion.button onClick={callback} type={type} className={`${styles.Button} ${styles[style]}`}
      whileTap={{ scale: 1.05 }} whileHover={{ scale: 1.05 }}>
      {content}
    </motion.button>
  )
}
