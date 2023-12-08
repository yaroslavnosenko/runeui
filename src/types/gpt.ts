export enum GptProvider {
  OLLAMA,
}

export type GptModel = {
  provider: GptProvider
  name: string
  tag: string
}

export type GptResponse = {
  model: GptModel
  message: string
}

export type GptRequest = {
  model: GptModel
  prompt: string
  useContext?: boolean
}

export type GptAdapter = {
  defaultHost: string
  generate: (request: GptRequest) => Promise<GptResponse>
  list: () => Promise<GptModel[]>
  ping: () => Promise<GptProvider>
}
