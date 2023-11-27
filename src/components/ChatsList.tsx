import { ChatLink, NewChatButton } from '@/components'

const mock = [
  { id: '1', name: 'SVG Infinity Sign' },
  { id: '2', name: 'Interview Outcome: Gratitude & Future Consideration' },
  { id: '3', name: 'Random characters, user inquiry.' },
  { id: '4', name: 'Can not make it. Thanks!' },
  { id: '5', name: 'Enhance CV for Job' },
]

export const ChatsList = () => {
  return (
    <>
      <NewChatButton />
      {mock.map(({ id, name }) => (
        <ChatLink key={id} id={id} name={name} />
      ))}
    </>
  )
}
