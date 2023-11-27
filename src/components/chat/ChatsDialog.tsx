import { useDialogs } from '@/hooks'
import { motion } from 'framer-motion'
import { ChatsList, NewChatLink } from '@/components'

export const ChatsDialog = () => {
  const { setDialog } = useDialogs()
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 48 }}
      className="custom-dialog"
      onClick={() => setDialog(null)}
    >
      <section className="container px-6 mx-auto  max-w-3xl py-56">
        <NewChatLink />
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 mt-6">
          <ChatsList />
        </div>
      </section>
    </motion.div>
  )
}
