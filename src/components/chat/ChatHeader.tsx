import { BiChip, BiChevronLeft } from 'react-icons/bi'

export const ChatHeader = () => {
  return (
    <header className="fixed bg-gradient-to-b from-base-100 to-transparent top-0 left-0 right-0 px-6 pt-6 justify-between flex">
      <button className="btn btn-circle btn-base">
        <BiChevronLeft className="w-6 h-6" />
      </button>
      <button className="btn rounded-full btn-base">
        <BiChip className="w-6 h-6" />
        Mirage
      </button>
    </header>
  )
}
