import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Game } from '../pages/Game/Game'
import { Result } from '../pages/Result/Result'
import { Statistics } from '../pages/Statistics/Statistics'
import { ContentContainer } from '../features/ContentContainer/ContentContainer'
import { URLS } from './router.types'

const home = {
  path: URLS.HOME,
  element: <Home />
}

const game = {
  path: URLS.GAME,
  element: <Game />
}

const result = {
  path: URLS.RESULT,
  element: <Result />
}

const statistics = {
  path: URLS.STATISTICS,
  element: <Statistics />
}

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
