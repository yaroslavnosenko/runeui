import { BiBookmarkAlt } from 'react-icons/bi'

export const ChatLink = () => {
  return (
    <a
      href="#"
      className="flex min-w-0 items-center gap-2 link link-hover underline-offset-8"
    >
      <BiBookmarkAlt className="flex-shrink-0" />
      <p className="truncate leading-loose">
        Interview Outcome: Gratitude & Future Consideration
      </p>
    </a>
  )
}
