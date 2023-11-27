import { DEFULT_OLLAMA_HOST } from '@/configs'
import { useOllama } from '@/hooks'
import { BiChip, BiChevronLeft } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

export const ChatHeader = () => {
  const { models } = useOllama(DEFULT_OLLAMA_HOST)
  const modelName = models.at(0)?.name || 'not_selected'

  return (
    <header className="fixed bg-gradient-to-b from-base-100 to-transparent top-0 left-0 right-0 px-6 pt-6 justify-between flex">
      <NavLink to={'/'} className="btn btn-circle">
        <BiChevronLeft />
      </NavLink>
      <button className="btn rounded-full">
        <BiChip />
        {modelName}
      </button>
    </header>
  )
}
