import { Rune } from '@/assets/Rune'
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
    <div className="bg-base-200 rounded-[32px] flex items-end">
      <button className="btn btn-circle btn-base w-14 h-14">
        <Rune className="w-8 h-8" />
      </button>
      <textarea
        placeholder="Message..."
        className="textarea textarea-ghost bg-transparent flex-1 px-6 overflow-auto resize-none py-3 min-h-0 self-center leading-normal text-base"
        onChange={handleChange}
        ref={textAreaRef}
        rows={1}
        value={value}
      />
      {value && (
        <button className="btn btn-circle btn-accent w-14 h-14">
          <BiUpArrowAlt />
        </button>
      )}
      {!value && (
        <button className="btn btn-circle btn-base w-14 h-14">
          <BiPlus />
        </button>
      )}
    </div>
  )
}
