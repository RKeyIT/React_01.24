import styles from './App.module.css'
import { AppTitles } from '../entities/AppBackground/AppTitles'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from '../router'
import { Provider } from 'react-redux'
import { persistor, store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'

export const App = () => {
  return (
    <div className={styles.App}>
      <AppTitles />
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <RouterProvider router={ROUTER} />
        </PersistGate>
      </Provider>
    </div>
  )
}
