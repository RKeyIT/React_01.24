import { Dispatch } from "react"

export interface IQuizContext {
    questionAmount: number | string
    category: string
    difficulty: string
    type: string
    time: string
    minQuestionsCount: number
    maxQuestionsCount: number
}

export enum ActionTypeEnum {
    AMOUNT = 'AMOUNT',
    CATEGORY = 'CATEGORY',
    DIFFICULTY = 'DIFFICULTY',
    TYPE = 'TYPE',
    TIME = 'TIME',
}

export interface IAction {
    type: ActionTypeEnum,
    payload: string | number
}

export type QuizContextReducerType = (state: IQuizContext, action: IAction) => IQuizContext

export type QuizProviderValueType = [IQuizContext, Dispatch<IAction>]