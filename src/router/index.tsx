import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Game } from '../pages/Game/Game'
import { Result } from '../pages/Result/Result'
import { Statistics } from '../pages/Statistics/Statistics'
import { ContentContainer } from '../features/ContentContainer/ContentContainer'
import { URLS } from './router.types'
import { RouteProtector } from './RouteProtector'
import { NotFound404 } from '../pages/NotFound404/NotFound404'

const home = {
  path: URLS.HOME,
  element: (
    <RouteProtector>
      <Home />
    </RouteProtector>
  )
}

const game = {
  path: URLS.GAME,
  element: (
    <RouteProtector>
      <Game />
    </RouteProtector>
  )
}

const result = {
  path: URLS.RESULT,
  element: (
    <RouteProtector>
      <Result />
    </RouteProtector>
  )
}

const statistics = {
  path: URLS.STATISTICS,
  element: (
    <RouteProtector>
      <Statistics />
    </RouteProtector>
  )
}

const not_found = {
  path: URLS.NOT_FOUND,
  element: <NotFound404 />
}

const root = [
  {
    path: '/',
    element: <ContentContainer />,
    children: [not_found, home, game, result, statistics]
  }
]

// NOTE - Useless linter warning disabling
// eslint-disable-next-line react-refresh/only-export-components
export const ROUTER = createBrowserRouter(root)
