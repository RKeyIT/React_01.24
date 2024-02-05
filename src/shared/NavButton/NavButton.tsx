import { PageNames, useGameContext } from '../../context/GameContext';
import styles from './NavButton.module.css'
import { FC } from 'react'

interface IProps {
    children: PageNames
}

export const NavButton: FC<IProps> = ({children}) => {
    const [, setContext] = useGameContext()

    const changePage = () => {
        setContext(prev => ({
            ...prev,
            currentPage: children
        }))
    }
   
    return (
        <button onClick={changePage} className={styles.NavButton}>
            { children }
        </button>
    );
};