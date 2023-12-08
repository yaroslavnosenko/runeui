import { GptContext } from '@/contexts'
import { useContext } from 'react'

export const useGpt = () => useContext(GptContext)
