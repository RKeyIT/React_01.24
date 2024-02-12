import { Dispatch, useReducer } from "react"

export enum GameReducerActionTypes {
    COLLECTION = 'COLLECTION',
    INDEX = 'INDEX',
    QUEST = 'QUEST',
    CORRECT = 'CORRECT',
    INCORRECT = 'INCORRECT'
}

interface ICollectionActionPayloadItem {
    // type: 'boolean' | 'multiple',
    // difficulty: "easy" | "medium" | "hard",    
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface ICollectionAction {
    type: GameReducerActionTypes.COLLECTION,
    payload: ICollectionActionPayloadItem[]
}

interface IIndexAction {
    type: GameReducerActionTypes.INDEX,
    payload: number
}

interface IQuestOrCorrectAction {
    type: GameReducerActionTypes.QUEST | GameReducerActionTypes.CORRECT,
    payload: string
}

interface IIncorrectAction {
    type: GameReducerActionTypes.INCORRECT
    payload: string[]
}

type ActionType = ICollectionAction | IIndexAction | IQuestOrCorrectAction | IIncorrectAction

interface IState {
    questionCollection: ICollectionActionPayloadItem[]
    currentIndex: number
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

const initialState: IState = {
    questionCollection: [],
    currentIndex: 0,
    question: '',
    correct_answer: '',
    incorrect_answers: ['']
}

const reducer = (state: IState, action: ActionType): IState => {
    if (!action || !action.payload) throw new Error('Wrong action received!')

    switch (action.type) {
        case GameReducerActionTypes.COLLECTION:
            const {question, correct_answer, incorrect_answers} = action.payload[0]

            return {
                questionCollection: action.payload,
                currentIndex: 0,
                question: question,
                correct_answer: correct_answer,
                incorrect_answers: incorrect_answers
            }

        case GameReducerActionTypes.INDEX:
            return {
                ...state,
                currentIndex: action.payload
            }
        case GameReducerActionTypes.QUEST:
            return {
                ...state,
                question: action.payload
            }
        case GameReducerActionTypes.CORRECT:
            return {
                ...state,
                correct_answer: action.payload
            }
        case GameReducerActionTypes.INCORRECT:
            return {
                ...state,
                incorrect_answers: action.payload
            }
        default:
            throw new Error('Default case casued!')
    }
}

export const useGameReducer = (): [IState, Dispatch<ActionType>] => useReducer(reducer, initialState)