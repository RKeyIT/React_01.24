import styles from './App.module.css'
import { AppTitles } from '../entities/AppBackground/AppTitles'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from '../router'
import { Provider } from 'react-redux'
import { store } from '../store'

export const App = () => {
  return (
    <div className={styles.App}>
      <AppTitles />
      <Provider store={store}>
        <RouterProvider router={ROUTER} />
      </Provider>
    </div>
  )
}
