import { AnimatePresence, motion } from 'framer-motion'
import styles from './Heading.module.css'
import { FC } from 'react'

interface IProps {
  pageName: string
}

export const Heading: FC<IProps> = ({ pageName }) => {
  const initialAnimState = {
    y: 25,
    opacity: 0,
  }

  const finalAnimState = {
    y: 0,
    opacity: 1,
  }

  return (
    <AnimatePresence>
      <motion.div key={pageName} className={styles.Heading}
        initial={initialAnimState} 
        animate={finalAnimState}>
        <h2 className={`${styles.h2} ${styles.mainHeading}`}>{pageName}</h2>
      </motion.div>
    </AnimatePresence>
  )
}
