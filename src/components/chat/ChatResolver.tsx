import { useParams } from 'react-router-dom'
import { ChatHeader, ChatHistory } from '@/components'
import { useGpt, usePrompt } from '@/hooks'
import { GptModel, MessageType } from '@/types'
import { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { database } from '@/database'

export const ChatResolver = () => {
  const [models, setModels] = useState<GptModel[]>([])
  const [activeModel, setActiveModel] = useState<GptModel | null>(null)
  const { prompt } = usePrompt()
  const { adapter } = useGpt()
  const params = useParams<{ chatId: string }>()
  const chatId: number = parseInt(params.chatId || '')
  const messages = useLiveQuery(
    () => database.messages.where('chatId').equals(chatId).toArray(),
    [chatId]
  )

  useEffect(() => {
    if (!adapter) {
      return
    }
    adapter.list().then((res) => {
      setModels(res)
      setActiveModel(res.at(0) || null)
    })
  }, [adapter])

  useEffect(() => {
    const onHumanMessage = async () => {
      if (!prompt || !chatId) {
        return
      }
      let chat = await database.chats.get(chatId)
      if (!chat) {
        await database.chats.add({ id: chatId, name: 'New Super Chat' })
        chat = await database.chats.get(chatId)
      }
      await database.messages.add({
        content: prompt,
        type: MessageType.HUMAN,
        chatId,
      })
    }
    onHumanMessage()
  }, [prompt, chatId])

  return (
    <>
      <ChatHeader activeModel={activeModel} models={models} />
      <ChatHistory messages={messages || []} />
    </>
  )
}
