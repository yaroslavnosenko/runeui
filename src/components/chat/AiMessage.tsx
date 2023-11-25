import { BiChip } from 'react-icons/bi'

export const AiMessage = () => {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-full flex justify-center items-center flex-shrink-0 bg-base-200">
        <BiChip className="w-6 h-6" />
      </div>
      <div className="pt-3 text-base-content/60 leading-relaxed">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}
