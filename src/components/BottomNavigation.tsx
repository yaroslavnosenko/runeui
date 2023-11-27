import { ChatInput } from '@/components'
import { useDialogs } from '@/hooks'
import { motion } from 'framer-motion'
import { useLocation, useMatch } from 'react-router-dom'
import classNames from 'classnames'
import { BiBookmarkAlt } from 'react-icons/bi'
import { chats } from '@/mocks'

export const BottomNavigation = () => {
  const { setDialog, activeDialog } = useDialogs()
  const { pathname } = useLocation()
  const chatId = useMatch('/:chatId')?.params.chatId

  const showChatInput = pathname === '/' || activeDialog ? false : true
  const isHome = pathname === '/'
  const chatName = chats.find(({ id }) => id === chatId)?.name || 'New Chat'
  return (
    <motion.nav
      initial={{ bottom: -96, opacity: 0 }}
      animate={{ bottom: showChatInput ? 0 : -96, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-base-100 to-transparent via-base-100 py-8"
    >
      <div className="container px-6 mx-auto max-w-3xl">
        <menu className="flex h-16 items-start justify-center gap-6 leading-loose">
          {isHome && (
            <button
              className={classNames('link link-hover underline-offset-8', {
                underline: activeDialog === null,
              })}
              onClick={() => setDialog(null)}
            >
              Home
            </button>
          )}

          {!isHome && (
            <>
              <button
                className={classNames(
                  'flex gap-2 items-center link link-hover underline-offset-8 max-w-[16rem] min-w-0',
                  {
                    underline: activeDialog === 'chats',
                  }
                )}
                onClick={() => setDialog('chats')}
              >
                <BiBookmarkAlt className="flex-shrink-0" />
                <p className="truncate leading-loose">{chatName}</p>
              </button>

              <button
                className={classNames('link link-hover underline-offset-8', {
                  underline: activeDialog === null,
                })}
                onClick={() => setDialog(null)}
              >
                Ai
              </button>
            </>
          )}

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
