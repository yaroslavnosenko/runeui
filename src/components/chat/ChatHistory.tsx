import { ChatMessage } from '@/components'
import { useEffect } from 'react'
import { Message } from '@/types'

type ChatHistoryProps = {
  messages: Message[]
}

export const ChatHistory = ({ messages }: ChatHistoryProps) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [messages])

  return (
    <div className="grid grid-cols-1 gap-8 min-h-screen items-end pb-56 pt-24">
      <div className="container mx-auto max-w-3xl px-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </div>
  )
}
