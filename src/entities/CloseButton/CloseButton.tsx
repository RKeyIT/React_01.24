import { Link } from 'react-router-dom'
import styles from './CloseButton.module.css'
import { FC } from 'react'
import { URLs } from '../../router/router.types'

interface IProps {
  title?: string
  callback?: () => void
}

export const CloseButton: FC<IProps> = ({ title = 'close', callback }) => {
  return (
    <div className={styles.CloseButtonContainer}>
      <Link to={URLs.HOME}>
        <button onClick={callback} type="button" title={title} className={styles.CloseButton}>
          x
        </button>
      </Link>
    </div>
  )
}
