import { PropsWithChildren, createContext, useState } from 'react'

type Dialog = 'docs' | 'lib' | null

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
    const bodyClass = document.getElementById('body')?.classList
    if (dialog) {
      bodyClass?.add('no-scroll')
    } else {
      bodyClass?.remove('no-scroll')
    }
  }

  return (
    <DialogsContext.Provider value={{ setDialog, activeDialog }}>
      {children}
    </DialogsContext.Provider>
  )
}
