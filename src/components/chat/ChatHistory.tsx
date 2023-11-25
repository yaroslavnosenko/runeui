import { AiMessage, UserMessage } from '@/components'

export const ChatHistory = () => {
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
