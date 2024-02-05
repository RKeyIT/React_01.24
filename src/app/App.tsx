import styles from './App.module.css'
import { Home } from '../pages/Home/Home'
import { Heading } from '../shared/Heading/Heading'
import { GameProvider } from '../context/GameContext'
import { Navigation } from '../features/Navigation/Navigation'
import { CloseButton } from '../shared/CloseButton/CloseButton'
import { Game } from '../pages/Game/Game'
import { Result } from '../pages/Result/Result'
import { Statistics } from '../pages/Statistics/Statistics'

export const App = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.Header}>QUIZzTRON</h1>
      <GameProvider>
        <div className={styles.container}>
          <nav className={styles.navigation}>
            <Navigation />
          </nav>
          <div className={styles.closeButton}>
            {/* TODO - Replace next title by state or context value */}
            <CloseButton title="Close quiz" />
          </div>
          <Heading pageName={'Game'} />
          {/* <Home /> */}
          <Game />
          {/* <Result />
          <Statistics /> */}
        </div>
      </GameProvider>
      <h2 className={styles.Footer}>QUIZzTRON</h2>
    </div>
  )
}
