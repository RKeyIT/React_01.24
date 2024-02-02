import styles from './App.module.css'
import { Home } from '../pages/Home/Home'
import { Heading } from '../shared/Heading/Heading'
import { GameProvider, useGameContext } from '../context/GameContext'
import { Navigation } from '../features/Navigation/Navigation'
import { CloseButton } from '../shared/CloseButton/CloseButton'
import { Game } from '../pages/Game/Game'
import { Result } from '../pages/Result/Result'
import { Statistics } from '../pages/Statistics/Statistics'

export const App = () => {
  const [context] = useGameContext()

  return (
    <div className={styles.App}>
      <h1 className={styles.Header}>QUIZzTRON</h1>
        <GameProvider>
          <div className={styles.container}>
            <nav className={styles.navigation}>
              <Navigation />
            </nav>
            <div className={styles.closeButton}>
                <CloseButton />
            </div>
            <Heading pageName={context.currentPage}/>
            {context.currentPage === 'Game' && <Game />}
            {context.currentPage === 'Home' && <Home />}
            {context.currentPage === 'Result' && <Result />}
            {context.currentPage === 'Statistics' && <Statistics />}
          </div>
        </GameProvider>
      <h2 className={styles.Footer}>QUIZzTRON</h2>
    </div>
  )
}
