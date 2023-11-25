import { useAutosizeTextArea } from '@/hooks'
import { useRef, useState } from 'react'
import { BiUpArrowAlt, BiMicrophone } from 'react-icons/bi'

export const MainInput = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState('')
  useAutosizeTextArea(textAreaRef.current, value)

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value
    setValue(val)
  }

  return (
    <div className="bg-base-200 rounded-badge flex items-end p-2">
      <textarea
        placeholder="Message..."
        className="textarea textarea-ghost bg-transparent flex-1 px-6 overflow-auto resize-none py-3 min-h-0 self-center leading-normal text-base"
        onChange={handleChange}
        ref={textAreaRef}
        rows={1}
        value={value}
      />
      {value && (
        <button className="btn btn-circle btn-base">
          <BiUpArrowAlt className="w-6 h-6" />
        </button>
      )}
      {!value && (
        <button className="btn btn-circle btn-base">
          <BiMicrophone className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
