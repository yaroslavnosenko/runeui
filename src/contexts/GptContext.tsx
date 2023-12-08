import { GptProvider } from '@/types'
import { PropsWithChildren, createContext, useState } from 'react'

type GptContextValue = {
  provider: GptProvider | null
  host: string
  setHost: (value: string) => void
}

export const GptContext = createContext<GptContextValue>({
  provider: null,
  host: '',
  setHost: () => console.error('Missed Provider'),
})

export const GptContextProvider = ({ children }: PropsWithChildren) => {
  const [host, setHost] = useState<string>('')
  const [provider] = useState<GptProvider | null>(null)

  return (
    <GptContext.Provider value={{ host, setHost, provider }}>
      {children}
    </GptContext.Provider>
  )
}
