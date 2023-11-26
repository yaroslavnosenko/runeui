import { useDialogs } from '@/hooks'
import { motion } from 'framer-motion'

export const LibDialog = () => {
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
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          exit={{ y: 20 }}
          className="text-3xl"
        >
          Comming very soon!
        </motion.h2>
      </div>
    </motion.div>
  )
}
