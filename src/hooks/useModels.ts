import { AbstractAdapter } from '@/adapters'
import { GptModel } from '@/types'
import { useEffect, useState } from 'react'

export const useModels = (adapter: AbstractAdapter | null) => {
  const [models, setModels] = useState<GptModel[]>([])
  const [activeModel, setActiveModel] = useState<GptModel | null>(null)

  // TODO implement last used model for current adapter persitence

  useEffect(() => {
    adapter?.list().then((models) => {
      setModels(models)
      setActiveModel(models.at(0) || null)
    })
  }, [adapter])

  return { models, activeModel }
}
