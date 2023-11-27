import { AiMessage, UserMessage } from '@/components'
import { useEffect } from 'react'

export const ChatHistory = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [])
  return (
    <div className="grid gap-8 min-h-screen items-end pb-72 pt-48">
      <div className="container mx-auto max-w-3xl px-6 grid gap-8">
        <UserMessage />
        <AiMessage />
        <UserMessage />
        <AiMessage />
        <UserMessage />
        <AiMessage />
      </div>
    </div>
  )
}
