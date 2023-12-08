import { PromptContext } from '@/contexts'
import { useContext } from 'react'

export const usePrompt = () => useContext(PromptContext)
