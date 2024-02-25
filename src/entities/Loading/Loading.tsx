import { FC } from 'react'
import { useAppSelector } from '../../store'
import { SuspenseLoading } from '../SuspenseLoading/SuspenseLoading'

export const Loading: FC = () => {
  const isLoading = useAppSelector((state) => state.loader.isLoadingSomething)

  return <>{isLoading && <SuspenseLoading />}</>
}
