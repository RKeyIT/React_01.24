import { useLocation, useNavigate } from 'react-router-dom'
import styles from './CloseButton.module.css'
import { FC, useEffect, useState } from 'react'
import { URLS } from '../../router/router.types'
import { useAppDispatch } from '../../store'
import { setGameStartAsFalseAC } from '../../store/gameSlice'
import { ContainerPortal } from '../ContainerPortal/ContainerPortal'

interface IProps {
  title?: string
}

export const CloseButton: FC<IProps> = ({ title = 'Go home' }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const path = useLocation().pathname
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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

    if (path === URLS.GAME) {
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

  const modalText = 'Are you sure want to end the game?'
  const portal = (
    <ContainerPortal
      textContent={modalText}
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
        <span className={styles.content}>x</span>
      </button>
      {isModalVisible && portal}
    </>
  )
}
