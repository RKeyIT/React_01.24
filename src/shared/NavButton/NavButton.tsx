import { PageNames } from '../../context/GameContext';
import styles from './NavButton.module.css'
import { FC } from 'react'

interface IProps {
    children: PageNames
}

export const NavButton: FC<IProps> = ({children}) => {
    return (
        <button className={styles.NavButton}>
            { children }
        </button>
    );
};