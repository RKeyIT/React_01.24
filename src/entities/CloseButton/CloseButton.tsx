import { useLocation, useNavigate } from 'react-router-dom'
import styles from './CloseButton.module.css'
import { FC, useState } from 'react'
import { URLs } from '../../router/router.types'
import { createPortal } from 'react-dom'
import { ModalGameEnder } from '../ModalGameEnder/ModalGameEnder'

interface IProps {
  title?: string
}

export const CloseButton: FC<IProps> = ({ title = 'Go home' }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const path = useLocation().pathname
  const navigate = useNavigate()

  const portalTarget = document.getElementById('ContentContainer')
  const disabled = path === URLs.HOME ? true : false

  const onCloseButton = () => {
    if(path === URLs.HOME) return

    if (path !== URLs.GAME) {
      return navigate(URLs.HOME)
    }

    if (path === URLs.GAME && portalTarget !== null) {
      setModalVisible(true)
    }
  }

  const onCancelModal = () => {
    setModalVisible(false)
  }
  const onEndGame = () => {
    setModalVisible(false)
    return navigate(URLs.HOME)
  }

  const ModalWithProps = <ModalGameEnder cancel={onCancelModal} close={onEndGame} />

  
  return <>
    <button disabled={disabled} onClick={onCloseButton} 
          type="button" title={title} className={styles.CloseButton}>
    x
  </button>
  {isModalVisible && portalTarget && createPortal(ModalWithProps, portalTarget)}
</>
}
