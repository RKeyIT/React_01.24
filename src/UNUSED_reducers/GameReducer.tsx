import { Dispatch, useReducer } from 'react'

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
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface ICollectionAction {
  type: GameReducerActionTypes.COLLECTION
  payload: ICollectionActionPayloadItem[]
}

interface IIndexAction {
  type: GameReducerActionTypes.INDEX
  payload: number
}

interface IQuestionAction {
  type: GameReducerActionTypes.QUEST | GameReducerActionTypes.CORRECT
  payload: string
}

interface ICorrectAction {
  type: GameReducerActionTypes.CORRECT
  payload: string
}

interface IIncorrectAction {
  type: GameReducerActionTypes.INCORRECT
  payload: string[]
}

type ActionType =
  | ICollectionAction
  | IIndexAction
  | IQuestionAction
  | ICorrectAction
  | IIncorrectAction

interface GameActionCreator {
  collection: (collection: ICollectionActionPayloadItem[]) => ICollectionAction
  index: (current: number) => IIndexAction
  question: (question: string) => IQuestionAction
  correct_answer: (answer: string) => ICorrectAction
  incorrect_answers: (incorrects: string[]) => IIncorrectAction
}

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

export const GameAC: GameActionCreator = {
  collection: (collection) => ({
    type: GameReducerActionTypes.COLLECTION,
    payload: collection
  }),
  index: (current) => ({
    type: GameReducerActionTypes.INDEX,
    payload: current
  }),
  question: (question) => ({
    type: GameReducerActionTypes.QUEST,
    payload: question
  }),
  correct_answer: (answer) => ({
    type: GameReducerActionTypes.CORRECT,
    payload: answer
  }),
  incorrect_answers: (incorrects) => ({
    type: GameReducerActionTypes.INCORRECT,
    payload: incorrects
  })
}

const reducer = (state: IState, action: ActionType): IState => {
  if (!action || !action.payload) throw new Error('Wrong action received!')

  switch (action.type) {
    case GameReducerActionTypes.COLLECTION:
      return {
        questionCollection: action.payload,
        currentIndex: 0,
        question: action.payload[0].question,
        correct_answer: action.payload[0].correct_answer,
        incorrect_answers: action.payload[0].incorrect_answers
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
      return state
  }
}

export const useGameReducer = (): [IState, Dispatch<ActionType>] =>
  useReducer(reducer, initialState)
