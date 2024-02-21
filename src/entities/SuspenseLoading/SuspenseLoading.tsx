import styles from './SuspenseLoading.module.css'
import { FC } from 'react'
import { createPortal } from 'react-dom'

export const SuspenseLoading: FC = () => {
  const portalTarget = document.getElementById('ContentContainer')

  const markup = (
    <div className={styles.Loading}>
      <div className={styles.circle}></div>
    </div>
  )

  return <>{portalTarget && createPortal(markup, portalTarget)}</>
}
