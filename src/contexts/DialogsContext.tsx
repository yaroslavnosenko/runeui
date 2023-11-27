import { PropsWithChildren, createContext, useState } from 'react'

type Dialog = 'docs' | 'lib' | 'chats' | null

type DialogsContextValue = {
  activeDialog: Dialog
  setDialog: (dialog: Dialog) => void
}

export const DialogsContext = createContext<DialogsContextValue>({
  activeDialog: null,
  setDialog: () => console.error('Missed Provider'),
})

export const DialogsProvider = ({ children }: PropsWithChildren) => {
  const [activeDialog, setActiveDialog] = useState<Dialog>(null)

  const setDialog = (dialog: Dialog) => {
    setActiveDialog(dialog)
    if (dialog) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  return (
    <DialogsContext.Provider value={{ setDialog, activeDialog }}>
      {children}
    </DialogsContext.Provider>
  )
}
