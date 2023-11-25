import { BiBookmarkAlt } from 'react-icons/bi'

export const ChatButton = () => {
  return (
    <button className="flex min-w-0 items-center gap-2 max-w-[16rem]">
      <BiBookmarkAlt className="stroke-[0.5] flex-shrink-0" />
      <p className="truncate">
        Interview Outcome: Gratitude & Future Consideration
      </p>
    </button>
  )
}
