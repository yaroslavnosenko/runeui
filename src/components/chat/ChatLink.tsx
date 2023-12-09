import { BiBookmarkAlt } from 'react-icons/bi'
import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { Chat } from '@/types'

type ChatLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  chat: Chat
}

export const ChatLink = ({ chat: { id, name }, ...other }: ChatLinkProps) => {
  return (
    <Link
      to={'/' + id}
      className="flex min-w-0 items-center gap-2 link link-hover underline-offset-8"
      {...other}
    >
      <BiBookmarkAlt className="flex-shrink-0" />
      <p className="truncate leading-loose">{name}</p>
    </Link>
  )
}
