import { useAutosizeTextArea, usePrompt } from '@/hooks'
import { useRef, useState, KeyboardEvent } from 'react'
import { BiUpArrowAlt, BiPlus } from 'react-icons/bi'

export const ChatInput = () => {
  const [value, setValue] = useState<string>('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  useAutosizeTextArea(textAreaRef.current, value)

  const { setPrompt } = usePrompt()

  const handleSend = () => {
    if (value) {
      setPrompt(value.trim())
      setValue('')
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey && value.trim()) {
      event.preventDefault()
      event.stopPropagation()
      handleSend()
    }
  }

  return (
    <div className="bg-base-content rounded-[32px] flex items-end p-2">
      <textarea
        placeholder="Message..."
        className="textarea bg-transparent flex-1 px-6 overflow-auto py-3 min-h-0 self-center leading-normal text-base-100 resize-none placeholder:text-base-100/90 selection:bg-base-100 selection:text-base-content caret-base-100"
        onChange={(event) => setValue(event.target.value)}
        ref={textAreaRef}
        rows={1}
        value={value}
        onKeyDown={handleKeyDown}
      />
      {value && (
        <button className="btn btn-circle w-12 h-12" onClick={handleSend}>
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
