import styles from './App.module.css';
import { Home } from './pages/Home/Home';

export const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Home />
      </div>
    </div>
  );
};
