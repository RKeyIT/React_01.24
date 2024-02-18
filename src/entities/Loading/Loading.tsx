import { createPortal } from 'react-dom';
import styles from './Loading.module.css';
import { FC } from 'react';
import { useAppSelector } from '../../store';

export const Loading: FC = () => {
  const isLoading = useAppSelector(state => state.loader.isLoadedSomething)

  const portalTarget = document.getElementById('ContentContainer')

  const markup = (
    <div className={styles.Loading}>
      <div className={styles.circle}></div>
    </div>
  )

  return <>{isLoading && portalTarget && createPortal(markup, portalTarget)}</>;
};
