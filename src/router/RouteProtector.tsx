import { FC, ReactNode } from "react"
import { URLS } from "./router.types"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppSelector } from "../store"

interface IRouteProtector {
    children: ReactNode
  }
  
  export const RouteProtector: FC<IRouteProtector> = ({children}) => {
    const { isGameStarted } = useAppSelector(state => state.game)
    const path = useLocation().pathname
    const navigate = useNavigate()

    // FIXME - if we're put the path directly in the browser we'll catch the warning and empty page!

    if (path === URLS.HOME) {
        console.log('We are on HOME page!')
    }

    if (path === URLS.GAME) {
        if (isGameStarted) {
            console.log('We are on GAME page!')
            return children
        }
        navigate(URLS.HOME)
        return
    }

    if (path === URLS.RESULT) {
        console.log('We are on RESULT page!')
    }

    if (path === URLS.STATISTICS) {
        console.log('We are on STATISTICS page!')
    }
  
    return children
  }