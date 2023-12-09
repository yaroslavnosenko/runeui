import { useParams } from 'react-router-dom'
import { ChatHeader, ChatHistory } from '@/components'
import { useGpt, useModels, usePrompt } from '@/hooks'
import { MessageType } from '@/types'
import { useEffect } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { database } from '@/database'

export const ChatResolver = () => {
  const { prompt } = usePrompt()
  const { adapter } = useGpt()
  const { models, activeModel } = useModels(adapter)

  const chatId = parseInt(useParams()['chatId'] || '0')

  const messages = useLiveQuery(
    () => database.messages.where('chatId').equals(chatId).toArray(),
    [chatId]
  )

  useEffect(() => {
    const onHumanMessage = async () => {
      if (!prompt || !chatId || !adapter || !activeModel) {
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

      // Model
      const result = await adapter.generate({ model: activeModel, prompt })
      await database.messages.add({
        content: result.message,
        type: MessageType.AI,
        chatId,
      })
    }
    onHumanMessage()
  }, [prompt, chatId, activeModel, adapter])

  return (
    <>
      <ChatHeader activeModel={activeModel} models={models} />
      <ChatHistory messages={messages || []} />
    </>
  )
}
