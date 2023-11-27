import { ChatResolver } from '@/components'
import { motion } from 'framer-motion'

export const ChatPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ChatResolver />
    </motion.div>
  )
}
