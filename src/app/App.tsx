import styles from './App.module.css'
import { GameProvider } from '../context/GameContext/GameContext'
import { AppTitles } from '../entities/AppBackground/AppTitles'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from '../router'
import { QuizConfigProvider } from '../context/QuizConfigContext/QuizConfigContext'

export const App = () => {
  return (
    <div className={styles.App}>
      <AppTitles />
      <GameProvider>
        <QuizConfigProvider>
          <RouterProvider router={ROUTER} />
        </QuizConfigProvider>
      </GameProvider>
    </div>
  )
}
