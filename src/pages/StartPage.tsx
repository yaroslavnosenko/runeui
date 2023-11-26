import { Rune } from '@/assets/Rune'
import { ChatLink, NewChatButton } from '@/components'
import { BiLogInCircle, BiHome } from 'react-icons/bi'

export const StartPage = () => {
  return (
    <>
      <section className="container pt-24 px-6 mx-auto max-w-lg">
        <Rune className="w-24 h-24 mx-auto" />
        <h1 className="text-3xl text-center font-medium mt-8 leading-normal">
          Rune - Awesome UI for Your Next Local LLM Project
        </h1>
        <p className="text-center text-base-content/60 mt-4">Start from PWA</p>
        <div className="rounded-full join bg-base-200 w-full mt-16">
          <button className="btn btn-circle h-14 w-14">
            <BiHome />
          </button>
          <input
            placeholder="http://localhost:4144"
            className="input bg-transparent px-6 h-14 flex-1"
          />
          <button className="btn btn-circle h-14 w-14">
            <BiLogInCircle />
          </button>
        </div>
        <p className="text-center text-base-content/60 mt-4 text-sm">v1.0.0</p>
      </section>

      <section className="container px-6 mx-auto  max-w-lg md:max-w-5xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
          <NewChatButton />
          <ChatLink />
          <ChatLink />
          <ChatLink />
          <ChatLink />
          <ChatLink />
        </div>
      </section>
    </>
  )
}
