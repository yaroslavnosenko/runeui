import { BiUser } from 'react-icons/bi'

export const UserMessage = () => {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-full flex justify-center items-center flex-shrink-0 bg-base-content text-base-100">
        <BiUser className="w-6 h-6" />
      </div>
      <div className="pt-3 leading-relaxed">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  )
}
