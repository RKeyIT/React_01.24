import styles from './App.module.css'
import { Home } from '../pages/Home/Home'
import { Heading } from '../shared/Heading/Heading'
import { GameProvider, useGameContext } from '../context/GameContext'
import { Navigation } from '../features/Navigation/Navigation'
import { CloseButton } from '../shared/CloseButton/CloseButton'

export const App = () => {
  const {currentPage} = useGameContext()

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
            <Heading pageName={currentPage}/>
            <Home />
          </div>
        </GameProvider>
      <h2 className={styles.Footer}>QUIZzTRON</h2>
    </div>
  )
}
