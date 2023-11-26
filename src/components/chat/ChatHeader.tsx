import { BiChip, BiChevronLeft } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

export const ChatHeader = () => {
  return (
    <header className="fixed bg-gradient-to-b from-base-100 to-transparent top-0 left-0 right-0 px-6 pt-6 justify-between flex">
      <NavLink to={'/'} className="btn btn-circle btn-base">
        <BiChevronLeft />
      </NavLink>
      <button className="btn rounded-full btn-base">
        <BiChip />
        Mirage
      </button>
    </header>
  )
}
