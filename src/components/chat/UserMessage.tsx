import { BiUser } from 'react-icons/bi'
import Markdown from 'react-markdown'

export const UserMessage = () => {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-full flex justify-center items-center flex-shrink-0 bg-base-content text-base-100">
        <BiUser className="w-6 h-6" />
      </div>
      <div className="pt-3 prose prose-pre:bg-base-200 prose-pre:text-base-content prose-pre:rounded-xl prose-p:text-base-content">
        <Markdown>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Markdown>
      </div>
    </div>
  )
}
