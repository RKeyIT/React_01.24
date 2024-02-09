import { useLocation, useNavigate } from 'react-router-dom'
import styles from './CloseButton.module.css'
import { FC } from 'react'
import { URLs } from '../../router/router.types'

interface IProps {
  title?: string
}

/* TODO
- Upon pressing the “End quiz” button on the main quiz screen we should see a 
  modal window with some text and 2 buttons - “Cancel” and “Confirm”. 
  Upon pressing “Cancel” button, we just close this modal window, but upon pressing 
  “Confirm” button we need to navigate user back to configuration screen

- After answering the last question or if timer ends on the main quiz screen, 
  we need to navigate users to the result screen
*/

export const CloseButton: FC<IProps> = ({ title = 'Go home' }) => {
  const path = useLocation().pathname
  const navigate = useNavigate()

  const disabled = path === URLs.HOME ? true : false

  const onCloseButton = () => {
    if(path === URLs.HOME) return

    if (path !== URLs.GAME) {
      return navigate(URLs.HOME)
    }
  }
  
  return (
      <button disabled={disabled} onClick={onCloseButton} 
              type="button" title={title} className={styles.CloseButton}>
        x
      </button>
  )
}
