import { ActionTypeEnum, IAction, IQuizContext, QuizContextReducerType } from "./QuizConfigContext.types";

export const quizConfigReducer: QuizContextReducerType = (state: IQuizContext, action: IAction) => {
    const isQuestAmount = () => typeof action.payload === 'number' 
        && !isNaN(action.payload) && action.type === ActionTypeEnum.AMOUNT

    if (isQuestAmount()) {
        return {
            ...state,
            questionAmount: action.payload
        }
    } 

    if (typeof action.payload === 'string') {
        switch (action.type) {
            case ActionTypeEnum.CATEGORY:
                return {
                    ...state,
                    category: action.payload
                }
            case ActionTypeEnum.DIFFICULTY:
                return {
                    ...state,
                    difficulty: action.payload
                }
            case ActionTypeEnum.TIME:
                return {
                    ...state,
                    time: action.payload
                }
            case ActionTypeEnum.TYPE:
                return {
                    ...state,
                    type: action.payload
                }
            default:
                throw new Error('Unexpected action type was received')
        }
    }

    throw new Error('Unexpected action type was received')
}