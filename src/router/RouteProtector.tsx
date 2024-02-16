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

  // FIXME - if we're put the path directly in the browser we'll catch the warning and empty page!

  useEffect(() => {
    if (path === URLS.HOME) {
      console.log('We are on HOME page!')
    }

    if (path === URLS.GAME) {
      if (isGameStarted) {
        console.log('We are on GAME page!')
      } else {
        console.error('Game should be start from the interface!')
        navigate(URLS.HOME)
      }
    }

    if (path === URLS.RESULT) {
      console.log('We are on RESULT page!')
    }

    if (path === URLS.STATISTICS) {
      console.log('We are on STATISTICS page!')
    }
  }, [isGameStarted, path, navigate])

  return children
}
