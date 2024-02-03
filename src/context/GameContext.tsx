import { useContext, createContext, ReactNode, FC, useState, Dispatch, SetStateAction } from "react";
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from "../global.types";

export enum PageNames {
    GAME = 'Game',
    HOME = 'Home',
    RESULT = 'Result',
    STATISTICS = 'Statistics'
}

export interface IGameSettings {
    questionAmount: number,
    category: string,
    difficulty: string,
    type: string,
    time: string,
}

export interface IGameContext {
    currentPage: PageNames
    isInGame: boolean
    minQuestionsCount: number,
    maxQuestionsCount: number,
    gameSettings: IGameSettings,
    resetSettings(): void,
    start(): void,
    close(): void,
    getApiUrl(): string,
}

interface IGameProvider { children: ReactNode }

const defaultContext: IGameContext = {
    currentPage: PageNames.GAME,
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
        this.resetSettings()
        console.log('Game closed', this.isInGame)
        // Other repeatable logic
     },

     resetSettings() {
        this.gameSettings.questionAmount = 5
        this.gameSettings.category = QuizCategories.ANY.id
        this.gameSettings.difficulty = QuizDifficulties.ANY.id
        this.gameSettings.type = QuizType.ANY.id
        this.gameSettings.time = QuizTime.ANY.id
     },

     getApiUrl() {
        // Request example: https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple
        const BASE_API_URL = `https://opentdb.com/api.php?`
        const {questionAmount, category, difficulty, type} = this.gameSettings

        let urlParams = 'amount=' + questionAmount

        if (category !== 'any') urlParams += '&category=' + category
        if (difficulty !== 'any') urlParams += '&difficulty=' + difficulty
        if (type !== 'any') urlParams += '&type=' + type

        return BASE_API_URL + urlParams
     }
}

type ProviderValue = [IGameContext, Dispatch<SetStateAction<IGameContext>>]

const GameContext = createContext<ProviderValue>([defaultContext, () => {}])

export const useGameContext = (): ProviderValue => {
    const [context, setContext] = useContext(GameContext);

    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
    }

    return [context, setContext];
}


export const GameProvider: FC<IGameProvider> = ({ children }) => {
    // FIXME - How to add setContext to a value of Provider?!
    const [context, setContext] = useState(defaultContext);

    return (
        <GameContext.Provider value={[context, setContext]}>
            {children}
        </GameContext.Provider>
    );
};
