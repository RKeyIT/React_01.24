import { FC, ReactNode, useEffect } from 'react'
import { URLS } from './router.types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store'

interface IRouteProtector {
  children: ReactNode
}

export const RouteProtector: FC<IRouteProtector> = ({ children }) => {
  const { isGameStarted } = useAppSelector((state) => state.game)
  const path = useLocation().pathname
  const navigate = useNavigate()

  useEffect(() => {
    // if (path === URLS.HOME) {
    // }
    // if (path === URLS.RESULT) {
    // }
    // if (path === URLS.STATISTICS) {
    // }

    if (path === URLS.GAME && !isGameStarted) {
      console.error('Game should be start from the interface!')
      navigate(URLS.HOME)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  return children
}
