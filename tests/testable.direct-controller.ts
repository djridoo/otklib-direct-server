import { DirectController } from 'direct.controller'

export class TestableDirectController implements DirectController<number, number> {
  public handle(input: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(input + 1)
      }, 100)
    })
  }
}
