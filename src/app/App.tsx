import styles from './App.module.css'
import { GameProvider } from '../context/GameContext/GameContext'
import { AppTitles } from '../entities/AppBackground/AppTitles'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from '../router'
import { QuizConfigProvider } from '../context/QuizConfigContext/QuizConfigContext'
import { Provider } from 'react-redux'
import { store } from '../store'

export const App = () => {
  return (
    <div className={styles.App}>
      <AppTitles />
      <Provider store={store}>
        <GameProvider>
          <QuizConfigProvider>
            <RouterProvider router={ROUTER} />
          </QuizConfigProvider>
        </GameProvider>
      </Provider>
    </div>
  )
}
