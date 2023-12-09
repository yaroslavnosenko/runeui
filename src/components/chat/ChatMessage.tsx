import classNames from 'classnames'
import Markdown from 'react-markdown'
import { BiChip, BiUser } from 'react-icons/bi'
import { Message, MessageType } from '@/types'

type ChatMessageProps = {
  message: Message
}

export const ChatMessage = ({
  message: { content, type },
}: ChatMessageProps) => {
  const isAi = type === MessageType.AI

  return (
    <div className="flex gap-x-6 flex-col md:flex-row md:items-start py-6">
      <div
        className={classNames(
          'w-12 h-12 rounded-full flex justify-center items-center flex-shrink-0 bg-base-200',
          [isAi ? 'bg-grad' : 'bg-base-content'],
          [isAi ? 'text-base-content' : 'text-base-200']
        )}
      >
        {isAi ? <BiChip /> : <BiUser />}
      </div>
      <div
        className={classNames(
          'prose prose-pre:bg-base-200 prose-pre:rounded-xl prose-pre:text-base-content prose-p:text-base-content mt-2.5'
        )}
      >
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}
