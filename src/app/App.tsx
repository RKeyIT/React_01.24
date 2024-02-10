import styles from './App.module.css'
import { GameProvider } from '../context/GameContext/GameContext'
import { AppTitles } from '../entities/AppBackground/AppTitles'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from '../router'

export const App = () => {
  return (
    <div className={styles.App}>
      <AppTitles />
      <GameProvider>
        <RouterProvider router={ROUTER} />
      </GameProvider>
    </div>
  )
}
