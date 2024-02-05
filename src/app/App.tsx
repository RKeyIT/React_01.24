import styles from './App.module.css'
import { GameProvider } from '../context/GameContext'
import { AppTitles } from '../entities/AppBackground/AppTitles'
import { ContentContainer } from '../features/ContentContainer/ContentContainer'

export const App = () => {
  return (
    <div className={styles.App}>
      <AppTitles />
      <GameProvider>
        <ContentContainer />
      </GameProvider>
    </div>
  )
}
