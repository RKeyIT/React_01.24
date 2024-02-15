import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Game } from '../pages/Game/Game'
import { Result } from '../pages/Result/Result'
import { Statistics } from '../pages/Statistics/Statistics'
import { ContentContainer } from '../features/ContentContainer/ContentContainer'
import { URLS } from './router.types'
import { RouteProtector } from './RouteProtector'

const home = {
  path: URLS.HOME,
  element: <RouteProtector><Home /></RouteProtector>
}

const game = {
  path: URLS.GAME,
  element: <RouteProtector><Game /></RouteProtector>
}

const result = {
  path: URLS.RESULT,
  element: <RouteProtector><Result /></RouteProtector>
}

const statistics = {
  path: URLS.STATISTICS,
  element: <RouteProtector><Statistics /></RouteProtector>
}

// TODO - Create private routes for scenarios when the game has been started and when was not.

const root = [
  {
    path: '/',
    element: <ContentContainer />,
    children: [home, game, result, statistics]
  }
]

// NOTE - Useless linter warning disabling
// eslint-disable-next-line react-refresh/only-export-components
export const ROUTER = createBrowserRouter(root)
