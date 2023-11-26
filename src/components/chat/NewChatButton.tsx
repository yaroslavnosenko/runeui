import { BiMessageSquareAdd } from 'react-icons/bi'

export const NewChatButton = () => {
  return (
    <button className="flex min-w-0 items-center gap-2 link link-hover underline-offset-8 text-accent">
      <BiMessageSquareAdd className="flex-shrink-0" />
      <p className="truncate leading-loose">New Conversation</p>
    </button>
  )
}
