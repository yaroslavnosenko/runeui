import { ChatHeader, ChatHistory } from '@/components'

export const ChatResolver = () => {
  return (
    <>
      <ChatHeader />
      <ChatHistory messages={[]} />
    </>
  )
}
