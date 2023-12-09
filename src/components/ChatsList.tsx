import { ChatLink } from '@/components'
import { database } from '@/database'
import { useLiveQuery } from 'dexie-react-hooks'

export const ChatsList = () => {
  const chats = useLiveQuery(() => database.chats.toArray())
  return chats
    ? chats.map((chat) => <ChatLink key={chat.id} chat={chat} />)
    : null
}
