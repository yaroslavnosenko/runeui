import { DialogsContext } from '@/contexts/DialogsContext'
import { useContext } from 'react'

export const useDialogs = () => useContext(DialogsContext)
