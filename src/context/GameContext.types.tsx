import { Dispatch, SetStateAction } from 'react'

export enum PageNames {
  GAME = 'Game',
  HOME = 'Home',
  RESULT = 'Result',
  STATISTICS = 'Statistics'
}

export interface IGameSettings {
  questionAmount: number
  category: string
  difficulty: string
  type: string
  time: string
}

export interface IGameContext {
  currentPage: PageNames
  isInGame: boolean
  minQuestionsCount: number
  maxQuestionsCount: number
  gameSettings: IGameSettings
  resetSettings(): void
  start(): void
  close(): void
  getApiUrl(): string
}

export type ProviderValue = [IGameContext, Dispatch<SetStateAction<IGameContext>>]
