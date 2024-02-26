import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import styles from './NotFound404.module.css'
import { FC } from 'react'
import { URLS } from '../../router/router.types'

export const NotFound404: FC = () => {
  const navigate = useNavigate()

  const onGoHome = () => {
    navigate(URLS.HOME)
  }

  return (
    <div className={styles.NotFound404}>
      <h2>PAGE WAS NOT FOUND {`:(`}</h2>
      <Button callback={onGoHome} content="Return to Home page" />
    </div>
  )
}
