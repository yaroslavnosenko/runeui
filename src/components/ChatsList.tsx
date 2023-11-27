import { ChatLink } from '@/components'
import { chats } from '@/mocks'

export const ChatsList = () => {
  return chats.map(({ id, name }) => <ChatLink key={id} id={id} name={name} />)
}
