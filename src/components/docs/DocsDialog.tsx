import { motion } from 'framer-motion'
import { useDialogs } from '@/hooks'

export const DocsDialog = () => {
  const { setDialog } = useDialogs()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="custom-dialog"
      onClick={() => setDialog(null)}
    >
      <div className="w-full h-full flex items-center justify-center">
        <motion.h2
          initial={{ y: 48 }}
          animate={{ y: 0 }}
          exit={{ y: 48 }}
          className="text-3xl"
        >
          Comming soon!
        </motion.h2>
      </div>
    </motion.div>
  )
}
