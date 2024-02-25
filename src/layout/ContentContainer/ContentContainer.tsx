import { Navigation } from '../Navigation/Navigation'
import { CloseButton } from '../../entities/CloseButton/CloseButton'
import { FC, Suspense } from 'react'
import styles from './ContentContainer.module.css'
import { Outlet } from 'react-router-dom'
import { Loading } from '../../entities/Loading/Loading'
import { SuspenseLoading } from '../../entities/SuspenseLoading/SuspenseLoading'

export const ContentContainer: FC = () => {
  return (
    <div className={styles.ContentContainer} id="ContentContainer">
      <Navigation />
      <CloseButton />
      <Loading />
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}
