export type Chat = {
  id?: number
  name: string
}

export enum MessageType {
  HUMAN,
  AI,
}

export type Message = {
  id?: number
  type: MessageType
  content: string
  chatId: number
}
