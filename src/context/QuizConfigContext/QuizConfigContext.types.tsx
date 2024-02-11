import { Dispatch } from "react"

export interface IQuizContext {
    questsAmount: number | string
    category: string
    difficulty: string
    type: string
    time: string
    minQuestsCount: number
    maxQuestsCount: number
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