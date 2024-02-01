import styles from './App.module.css'
import { Home } from '../pages/Home/Home'

export const App = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.Header}>QUIZzTRON</h1>
          <div className={styles.container}>
            <Heading pageName={context.currentPage}/>
            <Home />
          </div>
      <h2 className={styles.Footer}>QUIZzTRON</h2>
    </div>
  )
}
