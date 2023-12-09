import Dexie, { Table } from 'dexie'
import { Message, Chat } from '@/types'

export class RuneUIDexie extends Dexie {
  chats!: Table<Chat>
  messages!: Table<Message>

  constructor() {
    super('runeui')
    this.version(1).stores({
      chats: '++id, name',
      messages: '++id, type, content, chatId',
    })
  }
}

export const database = new RuneUIDexie()
