import { useGpt } from '@/hooks'
import { GptModel } from '@/types'
import { BiChip, BiChevronLeft, BiNoSignal } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

type ChatHeaderProps = {
  activeModel: GptModel | null
  models: GptModel[]
}

export const ChatHeader = ({ activeModel }: ChatHeaderProps) => {
  const { adapter } = useGpt()
  return (
    <header className="fixed bg-gradient-to-b from-base-100 to-transparent top-0 left-0 right-0 px-6 pt-6 justify-between flex">
      <NavLink to={'/'} className="btn btn-circle">
        <BiChevronLeft />
      </NavLink>
      {!adapter && (
        <NavLink to={'/'} className="btn btn-circle">
          <BiNoSignal />
        </NavLink>
      )}
      {adapter && activeModel && (
        <button className="btn rounded-full">
          <BiChip />
          {activeModel?.name}
        </button>
      )}
    </header>
  )
}
