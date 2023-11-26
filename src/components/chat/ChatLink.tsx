import { BiBookmarkAlt } from 'react-icons/bi'
import { HTMLAttributes } from 'react'

type ChatLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  name?: string
  id: string
}

export const ChatLink = ({ name, id, ...other }: ChatLinkProps) => {
  return (
    <a
      href={'/#/' + id}
      className="flex min-w-0 items-center gap-2 link link-hover underline-offset-8 justify-center"
      {...other}
    >
      <BiBookmarkAlt className="flex-shrink-0" />
      <p className="truncate leading-loose">
        {name ? name : 'New Conversation'}
      </p>
    </a>
  )
}
