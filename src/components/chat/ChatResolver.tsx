import { ChatHeader, ChatHistory } from '@/components'
import { useGpt, usePrompt } from '@/hooks'
import { messages } from '@/mocks'
import { GptModel } from '@/types'
import { useEffect, useState } from 'react'

export const ChatResolver = () => {
  const [models, setModels] = useState<GptModel[]>([])
  const [activeModel, setActiveModel] = useState<GptModel | null>(null)
  const { prompt } = usePrompt()
  const { adapter } = useGpt()

  useEffect(() => {
    if (!adapter) {
      return
    }
    adapter.list().then((res) => {
      setModels(res)
      setActiveModel(res.at(0) || null)
    })
  }, [adapter])

  console.log(prompt)

  return (
    <>
      <ChatHeader activeModel={activeModel} models={models} />
      <ChatHistory messages={messages} />
    </>
  )
}
