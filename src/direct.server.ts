import { DirectController } from 'direct.controller'

export class DirectServer {
  private handlers: { [name: string]: DirectController<any, any> } = {}

  public addHandler<InputData, OutputData>(name: string, handler: DirectController<InputData, OutputData>): void {
    this.handlers[name] = handler
  }

  public async call<InputData, OutputData>(name: string, input: InputData): Promise<OutputData> {
    if (!this.handlers[name]) throw new Error(`Handler "${name}" is not implemented`)
    return this.handlers[name].handle(input)
  }
}
