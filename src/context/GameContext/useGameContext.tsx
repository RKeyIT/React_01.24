import { useContext } from 'react'
import { ProviderValue } from './GameContext.types'
import { GameContext } from './GameContext'

export const useGameContext = (): ProviderValue => {
  const [context, setContext] = useContext(GameContext)

  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider')
  }

  return [context, setContext]
}
