import { PageNames } from '../../context/GameContext.types'
import { useGameContext } from '../../context/useGameContext'
import { Navigation } from '../../features/Navigation/Navigation'
import { Game } from '../../pages/Game/Game'
import { Home } from '../../pages/Home/Home'
import { Result } from '../../pages/Result/Result'
import { Statistics } from '../../pages/Statistics/Statistics'
import { CloseButton } from '../../shared/CloseButton/CloseButton'
import { Heading } from '../../shared/Heading/Heading'
import styles from './ContentContainer.module.css'
import { FC } from 'react'

export const ContentContainer: FC = () => {
  const [context] = useGameContext()

  return (
    <div className={styles.ContentContainer}>
      <Navigation />
      <CloseButton title="Close quiz" />
      <Heading pageName={context.currentPage} />
      {context.currentPage === PageNames.HOME && <Home />}
      {context.currentPage === PageNames.GAME && <Game />}
      {context.currentPage === PageNames.RESULT && <Result />}
      {context.currentPage === PageNames.STATISTICS && <Statistics />}
    </div>
  )
}
