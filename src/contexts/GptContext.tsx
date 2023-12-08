import { AbstractAdapter, OllamaAdapter } from '@/adapters'
import { DEFAULT_HOST } from '@/configs'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'

type GptContextValue = {
  host: string
  setHost: (value: string) => void
  adapter: AbstractAdapter | null
}

const ADAPTERS = [OllamaAdapter]

export const GptContext = createContext<GptContextValue>({
  host: '',
  setHost: () => console.error('Missed Provider'),
  adapter: null,
})

export const GptContextProvider = ({ children }: PropsWithChildren) => {
  const [host, setHost] = useState<string>(DEFAULT_HOST)
  const [adapter, setAdapter] = useState<AbstractAdapter | null>(null)

  useEffect(() => {
    const resolveAdapter = async () => {
      for (const Adapter of ADAPTERS) {
        const isActive = await Adapter.prototype.ping(host)
        if (isActive) {
          setAdapter(new Adapter(host))
          return
        }
      }
      setAdapter(null)
    }
    resolveAdapter()
  }, [host])

  return (
    <GptContext.Provider value={{ host, setHost, adapter }}>
      {children}
    </GptContext.Provider>
  )
}
