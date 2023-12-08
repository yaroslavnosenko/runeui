import { GptModel, GptProvider, GptRequest, GptResponse } from '@/types'
import { AbstractAdapter } from '@/adapters'
import { OLLAMA_LIST_ROUTE } from '@/configs'

export class OllamaAdapter extends AbstractAdapter {
  provider: GptProvider = GptProvider.OLLAMA

  constructor(host: string) {
    super(host)
  }

  async generate(request: GptRequest): Promise<GptResponse> {
    console.log(this.host)
    console.log(request)
    throw new Error('Method not implemented.')
  }

  async list(): Promise<GptModel[]> {
    try {
      const url = new URL(OLLAMA_LIST_ROUTE, this.host)
      const res = await fetch(url)
      const data = await res.json()
      const resModels = data['models']
      if (!resModels || Array.isArray(resModels) === false) {
        return []
      }
      return resModels.map((model) => {
        const [name, tag] = model['name'].split(':')
        return { name, tag }
      })
    } catch {
      return Promise.resolve([])
    }
  }

  async ping(host: string): Promise<boolean> {
    try {
      const res = await fetch(host)
      const data = await res.text()
      return data.includes('Ollama')
    } catch {
      return false
    }
  }
}
