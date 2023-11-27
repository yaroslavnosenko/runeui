import { DEFULT_OLLAMA_HOST } from '@/configs'
import { useOllama } from '@/hooks'
import { useState } from 'react'
import { BiMessageSquareAdd, BiNoSignal, BiSignal5 } from 'react-icons/bi'

export const HostInput = () => {
  const [host, setHost] = useState<string>(DEFULT_OLLAMA_HOST)
  const { connected } = useOllama(host)

  return (
    <div className="rounded-full bg-base-200 flex">
      <button className="h-14 w-14 flex items-center justify-center">
        {connected && <BiSignal5 />}
        {!connected && <BiNoSignal />}
      </button>
      <input
        placeholder="http://host:port"
        className="input bg-transparent pr-3 px-0 h-14 flex-1 truncate placeholder:text-base-content/40"
        value={host}
        onChange={(event) => setHost(event.target.value)}
      />
      {connected && (
        <button className="btn bg-grad rounded-full h-14">
          <BiMessageSquareAdd />
          <p className="hidden md:block">New Chat</p>
        </button>
      )}
    </div>
  )
}
