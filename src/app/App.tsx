import styles from './App.module.css'
import { Home } from '../pages/Home/Home'
import { Heading } from '../shared/Heading/Heading'
import { GameProvider, useGameContext } from '../context/GameContext'

export const App = () => {
  const {currentPage} = useGameContext()

  return (
    <div className={styles.App}>
      <h1 className={styles.Header}>QUIZzTRON</h1>
        <GameProvider>
          <div className={styles.container}>
            <Heading pageName={currentPage}/>
            <Home />
          </div>
        </GameProvider>
      <h2 className={styles.Footer}>QUIZzTRON</h2>
    </div>
  )
}
