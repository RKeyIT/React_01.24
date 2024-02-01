import { useContext, createContext, ReactNode, FC } from "react";
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from "../global.types";

enum PageNames {
    GAME = 'Game',
    HOME = 'Home',
    RESULT = 'Result',
    STATISTICS = 'Statistics'
}

interface IGameSettings {
    questionAmount: number,
    category: string,
    difficulty: string,
    type: string,
    time: string,
}

interface IGameContext {
    currentPage: PageNames
    isInGame: boolean
    minQuestionsCount: number,
    maxQuestionsCount: number,
    gameSettings: IGameSettings,
    start(): void,
    close(): void,
}

interface IGameProvider { children: ReactNode }

const defaultContext: IGameContext = {
    currentPage: PageNames.HOME,
    isInGame: false,
    minQuestionsCount: 5,
    maxQuestionsCount: 15,
    gameSettings: {
        questionAmount: 5,
        category: QuizCategories.ANY.id,
        difficulty: QuizDifficulties.ANY.id,
        type: QuizType.ANY.id,
        time: QuizTime.ANY.id,
    },
    start() { 
        this.isInGame = true
        console.log('Game is started', this.isInGame)
        // Other repeatable logic
     },
    close() { 
        this.isInGame = false
        console.log('Game closed', this.isInGame)
        // Other repeatable logic
     },
}

const GameContext = createContext(defaultContext)


export const useGameContext = () => useContext(GameContext)

export const GameProvider: FC<IGameProvider> = ({children}) => {
    return <GameContext.Provider value={defaultContext}>
        {children}
    </GameContext.Provider>
}