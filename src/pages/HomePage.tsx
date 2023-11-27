import { Rune } from '@/assets/Rune'
import { ChatsList, HostInput } from '@/components'
import { motion } from 'framer-motion'

export const HomePage = () => {
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
        <p className="text-center text-base-content/40 mt-4 mb-16">
          Start from PWA
        </p>
        <HostInput />
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
