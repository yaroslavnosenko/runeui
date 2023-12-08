import classNames from 'classnames'
import { BiChip, BiUser } from 'react-icons/bi'
import Markdown from 'react-markdown'

type ChatMessageProps = {
  id: string
  message: string
  isAi: boolean
}

export const ChatMessage = ({ message, isAi }: ChatMessageProps) => {
  return (
    <div className="flex gap-x-6 flex-col md:flex-row md:items-end py-6">
      <div
        className={classNames(
          'w-14 h-14 rounded-full flex justify-center items-center flex-shrink-0 bg-base-200 sticky bottom-48',
          [isAi ? 'bg-grad' : 'bg-base-content'],
          [isAi ? 'text-base-content' : 'text-base-200']
        )}
      >
        {isAi ? <BiChip /> : <BiUser />}
      </div>
      <div
        className={classNames(
          'prose prose-pre:bg-base-200 prose-pre:rounded-xl prose-pre:text-base-content prose-p:text-base-content'
        )}
      >
        <Markdown>{message}</Markdown>
      </div>
    </div>
  )
}
