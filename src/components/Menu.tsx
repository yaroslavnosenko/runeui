import { ChatButton } from '@/components/chat'

export const Menu = () => {
  return (
    <menu
      className="grid justify-center gap-6"
      style={{ gridTemplateColumns: 'auto auto auto auto' }}
    >
      <ChatButton />
      <a className="link link-hover underline-offset-8 underline">Ai</a>
      <a href="#" className="link link-hover underline-offset-8">
        Docs
      </a>
      <a href="#" className="link link-hover underline-offset-8">
        Lib
      </a>
    </menu>
  )
}
