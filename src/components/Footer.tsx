import { ChatInput, Menu } from '@/components'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <motion.footer
      initial={{ bottom: -88 }}
      // animate={{ bottom: 0 }}
      className="fixed bottom-0 left-0 right-0 py-8 pt-12 bg-gradient-to-t from-base-100 to-transparent via-base-100"
    >
      <div className="container px-6 mx-auto max-w-3xl grid gap-8">
        <Menu />
        <ChatInput />
      </div>
    </motion.footer>
  )
}
