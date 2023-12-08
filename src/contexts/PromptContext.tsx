import { PropsWithChildren, createContext, useEffect, useState } from 'react'

type PromptContextValue = {
  prompt: string
  setPrompt: (value: string) => void
}

export const PromptContext = createContext<PromptContextValue>({
  prompt: '',
  setPrompt: () => console.error('Missed Provider'),
})

export const PromptProvider = ({ children }: PropsWithChildren) => {
  const [prompt, setPrompt] = useState<string>('')

  useEffect(() => {
    if (prompt !== '') {
      setPrompt('')
    }
  }, [prompt, setPrompt])

  return (
    <PromptContext.Provider value={{ prompt, setPrompt }}>
      {children}
    </PromptContext.Provider>
  )
}
