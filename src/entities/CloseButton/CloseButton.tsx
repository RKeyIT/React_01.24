import { useLocation, useNavigate } from 'react-router-dom'
import styles from './CloseButton.module.css'
import { FC, useEffect, useState } from 'react'
import { URLS } from '../../router/router.types'
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
  const disabled = path === URLS.HOME ? true : false

  useEffect(() => {
    if (isModalVisible && path !== URLS.GAME) {
      setModalVisible(false)
    }
  }, [isModalVisible, path])

  const onCloseButton = () => {
    if (path !== URLS.GAME) {
      return navigate(URLS.HOME)
    }

    if (path === URLS.GAME && portalTarget !== null) {
      setModalVisible(true)
    }
  }

  const onCancelModal = () => {
    setModalVisible(false)
  }
  const onEndGame = () => {
    setModalVisible(false)
    return navigate(URLS.HOME)
  }

  const ModalWithProps = <ModalGameEnder cancel={onCancelModal} close={onEndGame} />

  return (
    <>
      <button
        disabled={disabled}
        onClick={onCloseButton}
        type="button"
        title={title}
        className={styles.CloseButton}>
        x
      </button>
      {isModalVisible && portalTarget && createPortal(ModalWithProps, portalTarget)}
    </>
  )
}
