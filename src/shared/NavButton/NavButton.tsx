import { PageNames, useGameContext } from '../../context/GameContext';
import styles from './NavButton.module.css'
import { FC } from 'react'

interface IProps {
    children: PageNames
}

export const NavButton: FC<IProps> = ({children}) => {
    const ctx = useGameContext()

    const changePage = () => {
        ctx.currentPage = children
        console.log(ctx.currentPage)
    }
   
    return (
        <button onClick={changePage} className={styles.NavButton}>
            { children }
        </button>
    );
};