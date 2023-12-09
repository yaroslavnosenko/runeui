import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

type PromptContextValue = {
  isBlocked: boolean
  setIsBlocked: (value: boolean) => void
  prompt: string
  setPrompt: (value: string) => boolean
}

export const PromptContext = createContext<PromptContextValue>({
  prompt: '',
  isBlocked: false,
  setPrompt: () => true,
  setIsBlocked: () => console.error('Missed Provider'),
})

export const PromptProvider = ({ children }: PropsWithChildren) => {
  const [prompt, _setPrompt] = useState<string>('')
  const [isBlocked, setIsBlocked] = useState<boolean>(false)

  useEffect(() => {
    if (prompt !== '') {
      _setPrompt('')
    }
  }, [prompt, _setPrompt])

  const setPrompt = useCallback(
    (prompt: string) => {
      if (isBlocked) return false
      _setPrompt(prompt)
      return true
    },
    [_setPrompt, isBlocked]
  )

  return (
    <PromptContext.Provider
      value={{ prompt, setPrompt, isBlocked, setIsBlocked }}
    >
      {children}
    </PromptContext.Provider>
  )
}
