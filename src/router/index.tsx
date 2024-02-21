import { createBrowserRouter } from 'react-router-dom'
import { ContentContainer } from '../layout/ContentContainer/ContentContainer'
import { URLS } from './router.types'
import { RouteProtector } from './RouteProtector'
import { NotFound404 } from '../pages/NotFound404/NotFound404'
import { lazy } from 'react'

const LazyHome = lazy(() => import('../pages/Home/Home'))
const home = {
  path: URLS.HOME,
  element: (
    <RouteProtector>
      <LazyHome />
    </RouteProtector>
  )
}

const LazyGame = lazy(() => import('../pages/Game/Game'))
const game = {
  path: URLS.GAME,
  element: (
    <RouteProtector>
      <LazyGame />
    </RouteProtector>
  )
}

const LazyResult = lazy(() => import('../pages/Result/Result'))
const result = {
  path: URLS.RESULT,
  element: (
    <RouteProtector>
      <LazyResult />
    </RouteProtector>
  )
}

const LazyStatistics = lazy(() => import('../pages/Statistics/Statistics'))
const statistics = {
  path: URLS.STATISTICS,
  element: (
    <RouteProtector>
      <LazyStatistics />
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
