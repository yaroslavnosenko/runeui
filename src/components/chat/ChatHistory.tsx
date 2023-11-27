import { ChatMessage } from '@/components'
import { messages } from '@/mocks'
import { useEffect } from 'react'

export const ChatHistory = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-8 min-h-screen items-end pb-80 pt-36">
      <div className="container mx-auto max-w-3xl px-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>
    </div>
  )
}
