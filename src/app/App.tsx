import styles from './App.module.css'
import { Home } from '../pages/Home/Home'
import { Heading } from '../shared/Heading/Heading'

export const App = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.Header}>QUIZzTRON</h1>
          <div className={styles.container}>
            <Heading pageName='home'/>
            <Home />
          </div>
      <h2 className={styles.Footer}>QUIZzTRON</h2>
    </div>
  )
}
