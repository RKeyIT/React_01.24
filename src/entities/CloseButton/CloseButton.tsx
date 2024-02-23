import { useLocation, useNavigate } from 'react-router-dom'
import styles from './CloseButton.module.css'
import { FC, useEffect, useState } from 'react'
import { URLS } from '../../router/router.types'
import { createPortal } from 'react-dom'
import { FullSizeModal } from '../FullSizeModal/FullSizeModal'
import { useAppDispatch } from '../../store'
import { setGameStartAsFalseAC } from '../../store/gameSlice'

interface IProps {
  title?: string
}

export const CloseButton: FC<IProps> = ({ title = 'Go home' }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const path = useLocation().pathname
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const portalTarget = document.getElementById('ContentContainer')
  const disabled = path === URLS.HOME

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
    dispatch(setGameStartAsFalseAC())
    return navigate(URLS.HOME)
  }

  const ModalWithProps = (
    <FullSizeModal
      textContent="Are you sure want to end the game?"
      confirmationColor="red"
      cancel={onCancelModal}
      confirm={onEndGame}
    />
  )

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
