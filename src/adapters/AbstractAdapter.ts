import {
  GptModel,
  GptProvider,
  GptRequest,
  GptResponse,
  IGptAdapter,
} from '@/types'

export abstract class AbstractAdapter implements IGptAdapter {
  host: string

  constructor(host: string) {
    this.host = host
  }

  abstract provider: GptProvider
  abstract generate(request: GptRequest): Promise<GptResponse>
  abstract list(): Promise<GptModel[]>
  abstract ping(host: string): Promise<boolean>
}
