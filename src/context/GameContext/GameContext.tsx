import { createContext, ReactNode, FC, useState } from 'react'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../../global.types'
import { IGameContext, PageNames, ProviderValue } from './GameContext.types'

interface IGameProvider {
  children: ReactNode
}

const defaultContext: IGameContext = {
  currentPage: PageNames.RESULT,
  isInGame: false,
  inGameData: {
    currQuestIndex: 0,
    lastQuestIndex: 9,
  },
  minQuestionsCount: 5,
  maxQuestionsCount: 15,
  gameSettings: {
    questionAmount: 5,
    category: QuizCategories.ANY.id,
    difficulty: QuizDifficulties.ANY.id,
    type: QuizType.ANY.id,
    time: QuizTime.ANY.id
  },

  start() {
    this.isInGame = true
    console.log('Game is started', this.isInGame)
  },

  close() {
    this.isInGame = false
    this.resetSettings()
    console.log('Game closed', this.isInGame)
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
    const { questionAmount, category, difficulty, type } = this.gameSettings

    let urlParams = 'amount=' + questionAmount

    if (category !== 'any') urlParams += '&category=' + category
    if (difficulty !== 'any') urlParams += '&difficulty=' + difficulty
    if (type !== 'any') urlParams += '&type=' + type

    return BASE_API_URL + urlParams
  }
}

export const GameContext = createContext<ProviderValue>([defaultContext, () => {}])

export const GameProvider: FC<IGameProvider> = ({ children }) => {
  const [context, setContext] = useState(defaultContext)

  return <GameContext.Provider value={[context, setContext]}>{children}</GameContext.Provider>
}
