import styles from './TextField.module.css'
import { FC, ReactNode, ReactText } from 'react'

interface IProps {
  children?: ReactNode
}

const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ' +
 'Distinctio sit, sed tempora placeat autem non voluptatum accusantium est ' +
 'iure nihil aliquam cupiditate harum dolor reiciendis sint dolorum doloremque quisquam nostrum!'

export const TextField: FC<IProps> = ({ children = lorem }) => {
  return (
    <div className={styles.TextField}>
      {children}
    </div>
  )
}
