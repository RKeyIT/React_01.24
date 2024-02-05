import { useReducer } from 'react'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../global.types'

export enum ActionTypeEnum {
  AMOUNT = 'amount',
  CATEGORY = 'category',
  DIFFICULTY = 'difficulty',
  TYPE = 'type',
  TIME = 'time'
}

export interface IHomeAction {
  type: ActionTypeEnum
  payload: string
}

interface IState {
  questionAmount: string
  category: string
  difficulty: string
  type: string
  time: string
}

const initialState: IState = {
  questionAmount: '5',
  category: QuizCategories.ANY.id,
  difficulty: QuizDifficulties.ANY.id,
  type: QuizType.ANY.id,
  time: QuizTime.ANY.id
}

const reducer = (state: IState, action: IHomeAction) => {
  switch (action.type) {
    case ActionTypeEnum.AMOUNT:
      return { ...state, questionAmount: action.payload }
    case ActionTypeEnum.CATEGORY:
      return { ...state, category: action.payload }
    case ActionTypeEnum.DIFFICULTY:
      return { ...state, difficulty: action.payload }
    case ActionTypeEnum.TYPE:
      return { ...state, type: action.payload }
    case ActionTypeEnum.TIME:
      return { ...state, time: action.payload }
    default:
      throw new Error('Dispatched unavailable action type')
  }
}

export const useHomeReducer = () => useReducer(reducer, initialState) // returns [state, dispatch]
