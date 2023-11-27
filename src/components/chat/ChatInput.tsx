import { useAutosizeTextArea } from '@/hooks'
import { useRef, useState } from 'react'
import { BiUpArrowAlt, BiPlus } from 'react-icons/bi'

export const ChatInput = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState('')
  useAutosizeTextArea(textAreaRef.current, value)

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value
    setValue(val)
  }

  return (
    <div className="bg-base-content rounded-[32px] flex items-end p-2">
      <textarea
        placeholder="Message..."
        className="textarea bg-transparent flex-1 px-6 overflow-auto py-3 min-h-0 self-center leading-normal text-base-100 resize-none placeholder:text-base-100/90 selection:bg-base-100 selection:text-base-content caret-base-100"
        onChange={handleChange}
        ref={textAreaRef}
        rows={1}
        value={value}
      />
      {value && (
        <button className="btn btn-circle w-12 h-12">
          <BiUpArrowAlt />
        </button>
      )}
      {!value && (
        <button className="btn btn-ghost text-base-100 btn-circle w-12 h-12">
          <BiPlus />
        </button>
      )}
    </div>
  )
}
