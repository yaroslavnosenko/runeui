import { Rune } from '@/assets/Rune'
import { ChatsList } from '@/components'
import { BiMessageSquareAdd, BiSignal5 } from 'react-icons/bi'
import { motion } from 'framer-motion'

export const StartPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="container pt-24 px-6 mx-auto max-w-lg">
        <Rune className="w-24 h-24 mx-auto" />
        <h1 className="text-3xl text-center font-medium mt-8 leading-normal">
          RuneUI - Open Source Client for Your Next Local LLM Project
        </h1>
        <p className="text-center text-base-content/40 mt-4">Start from PWA</p>
        <div className="rounded-full bg-base-200 mt-16 flex">
          <button className="h-14 w-14 flex items-center justify-center">
            <BiSignal5 />
          </button>
          <input
            placeholder="http://host:port"
            className="input bg-transparent pr-3 px-0 h-14 flex-1 truncate placeholder:text-base-content/40"
          />
          <button className="btn bg-grad rounded-full h-14">
            <BiMessageSquareAdd />
            New Chat
          </button>
        </div>
        <p className="text-center text-base-content/40 mt-4 text-sm">v1.0.0</p>
      </section>

      <section className="container px-6 mx-auto  max-w-lg md:max-w-5xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
          <ChatsList />
        </div>
      </section>
    </motion.div>
  )
}
