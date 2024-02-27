import { Navigation } from '../Navigation/Navigation'
import { CloseButton } from '../../entities/CloseButton/CloseButton'
import { FC, Suspense } from 'react'
import styles from './ContentContainer.module.css'
import { Outlet, useLocation } from 'react-router-dom'
import { Loading } from '../../entities/Loading/Loading'
import { SuspenseLoading } from '../../entities/SuspenseLoading/SuspenseLoading'
import { URLS } from '../../router/router.types'
import { Heading } from '../../shared/Heading/Heading'

export const ContentContainer: FC = () => {
  const path = useLocation().pathname

  const getHeading = () => {
    if ([URLS.HOME, URLS.GAME, URLS.RESULT, URLS.STATISTICS].some((el) => el === path)) {
      return path === URLS.HOME ? 'HOME' : path.slice(1).toUpperCase()
    }

    return 'Error 404'
  }

  return (
    <div className={styles.ContentContainer} id="ContentContainer">
      <Navigation />
      <CloseButton />
      <Loading />
      <Heading pageName={getHeading()} />
      <div className={styles.content}>
        <Suspense fallback={<SuspenseLoading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
