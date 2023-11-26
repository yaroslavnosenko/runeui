import { DocsDialog, LibDialog } from '@/components'
import { useDialogs } from '@/hooks'
import { AnimatePresence, motion } from 'framer-motion'

export const Dialogs = () => {
  const { activeDialog } = useDialogs()
  return (
    <>
      <AnimatePresence>
        {activeDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-base-100/80"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activeDialog === 'docs' && <DocsDialog key={2} />}
        {activeDialog === 'lib' && <LibDialog key={3} />}
      </AnimatePresence>
    </>
  )
}
