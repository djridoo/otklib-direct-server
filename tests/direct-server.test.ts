import { DirectServer } from '../src/direct.server'
import { TestableDirectController } from './testable.direct-controller'

describe('DirectServer', () => {
  let server: DirectServer
  let controller: TestableDirectController

  beforeEach(() => {
    server = new DirectServer()
    controller = new TestableDirectController()
    server.addHandler<number, number>('increment', controller)
  })

  test('call handler', async () => {
    const result = await server.call<number, number>('increment', 99)
    expect(result).toBe(100)
  })

  test('call unknown handler', async () => {
    await expect(server.call<number, number>('unknown', 99)).rejects.toThrow('Handler "unknown" is not implemented')
  })
})
