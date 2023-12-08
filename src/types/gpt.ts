export enum GptProvider {
  OLLAMA,
}

export type GptModel = {
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
}

export interface IGptAdapter {
  readonly provider: GptProvider
  readonly host: string
  generate(request: GptRequest): Promise<GptResponse>
  list(): Promise<GptModel[]>
  ping(host: string): Promise<boolean>
}
