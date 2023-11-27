import { useEffect, useState } from 'react'

type Model = {
  name: string
}

export const useOllama = (host: string) => {
  const [connected, setConnected] = useState<boolean>(false)
  const [models, setModels] = useState<Model[]>([])

  const fetchModels = async (host: string) => {
    const route = new URL('/api/tags', host)
    try {
      const res = await fetch(route)
      const res_1 = await res.json()
      setConnected(true)
      return setModels(res_1['models'] as Model[])
    } catch {
      return []
    }
  }

  useEffect(() => {
    fetchModels(host).then()
  }, [host])

  return { models, connected }
}
