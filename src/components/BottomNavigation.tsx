import { ChatInput, ChatLink } from '@/components'
import { useDialogs } from '@/hooks'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

export const BottomNavigation = () => {
  const { pathname } = useLocation()
  const { setDialog, activeDialog } = useDialogs()
  const showChatInput = pathname === '/' || activeDialog ? false : true
  return (
    <motion.nav
      initial={{ bottom: -88, opacity: 0 }}
      animate={{ bottom: showChatInput ? 0 : -88, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 py-8 pt-12 bg-gradient-to-t from-base-100 to-transparent via-base-100"
    >
      <div className="container px-6 mx-auto max-w-3xl grid gap-8">
        <menu
          className="grid justify-center gap-6 leading-loose"
          style={{ gridTemplateColumns: 'auto auto auto auto' }}
        >
          <ChatLink id="1" onClick={() => setDialog(null)} />
          <button
            className={classNames('link link-hover underline-offset-8', {
              underline: activeDialog === 'docs',
            })}
            onClick={() => setDialog('docs')}
          >
            Docs
          </button>
          <button
            className={classNames('link link-hover underline-offset-8', {
              underline: activeDialog === 'lib',
            })}
            onClick={() => setDialog('lib')}
          >
            Lib
          </button>
        </menu>
        <ChatInput />
      </div>
    </motion.nav>
  )
}
