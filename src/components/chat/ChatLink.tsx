import { BiBookmarkAlt } from 'react-icons/bi'
import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type ChatLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  name?: string
  id: string
}

export const ChatLink = ({ name, id, ...other }: ChatLinkProps) => {
  return (
    <Link
      to={'/' + id}
      className="flex min-w-0 items-center gap-2 link link-hover underline-offset-8"
      {...other}
    >
      <BiBookmarkAlt className="flex-shrink-0" />
      <p className="truncate leading-loose">
        {name ? name : 'New Conversation'}
      </p>
    </Link>
  )
}
