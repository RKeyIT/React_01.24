import { AnimatePresence, motion } from 'framer-motion'
import styles from './SuspenseLoading.module.css'
import { FC } from 'react'
import { createPortal } from 'react-dom'

export const SuspenseLoading: FC = () => {
  const portalTarget = document.getElementById('ContentContainer')

  const markup = (
    <AnimatePresence>
      <motion.div className={styles.Loading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}>
        <div className={styles.circle}></div>
      </motion.div>
    </AnimatePresence>
  )

  return <>{portalTarget && createPortal(markup, portalTarget)}</>
}
