import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import styles from './NotFound404.module.css'
import { FC } from 'react'
import { URLS } from '../../router/router.types'
import { motion } from 'framer-motion'

export const NotFound404: FC = () => {
  const navigate = useNavigate()

  const onGoHome = () => {
    navigate(URLS.HOME)
  }

  return (
    <motion.div className={styles.NotFound404}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}>
      <h2>PAGE WAS NOT FOUND {`:(`}</h2>
      <Button callback={onGoHome} content="Return to Home page" />
    </motion.div>
  )
}
