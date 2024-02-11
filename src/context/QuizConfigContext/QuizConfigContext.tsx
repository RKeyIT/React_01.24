import { ReactNode, createContext, useContext, useReducer } from "react";
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from "../../global.types";
import { IQuizContext, QuizProviderValueType } from "./QuizConfigContext.types";
import { quizConfigReducer } from "./QuizConfigReducer.tsx";

const defaultQuizContext: IQuizContext = {
    questsAmount: 5,
    category: QuizCategories.ANY.id,
    difficulty: QuizDifficulties.ANY.id,
    type: QuizType.ANY.id,
    time: QuizTime.ANY.id,
    minQuestsCount: 5,
    maxQuestsCount: 15,
}

const QuizConfigContext = createContext<QuizProviderValueType>([defaultQuizContext, () => {}])

interface IQuizConfigProvider {
    children: ReactNode
}

export const QuizConfigProvider = ({ children }: IQuizConfigProvider) => {
    const [state, dispatch] = useReducer(quizConfigReducer, defaultQuizContext)

    return <QuizConfigContext.Provider value={[state, dispatch]}>
        {children}
    </QuizConfigContext.Provider>
}

export const useQuizConfigDispatcherContext = () => {
    const context = useContext(QuizConfigContext)

    if (!context) throw new Error('useQuizConfigContext must be used within a QuizConfigProvider')

    return context
}