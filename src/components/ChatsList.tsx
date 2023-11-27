import { ChatLink, NewChatButton } from '@/components'
import { chats } from '@/mocks'

export const ChatsList = () => {
  return (
    <>
      <NewChatButton />
      {chats.map(({ id, name }) => (
        <ChatLink key={id} id={id} name={name} />
      ))}
    </>
  )
}
