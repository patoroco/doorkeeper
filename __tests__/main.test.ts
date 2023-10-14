// import fetch from 'node-fetch'
// import { getLocalIP } from '../src/utils'

// const { Response } = jest.requireActual('node-fetch')
// jest.mock('node-fetch', () => jest.fn())

// test('pass correctly the IP address', async () => {
//   const mockedFetch = fetch as jest.MockedFunction<typeof fetch>
//   mockedFetch.mockImplementationOnce(() => new Response('12.34.56.78'))

//   const localIP = await getLocalIP()
//   expect(localIP).toBe('12.34.56.78')
// })

// //TODO: test what happens when the connection fails

/**
 * Unit tests for the action's entrypoint, src/index.ts
 */

import * as main from '../src/main'

// Mock the action's entrypoint
const runMock = jest.spyOn(main, 'run').mockImplementation()

describe('index', () => {
  it('calls run when imported', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../src/index')

    expect(runMock).toHaveBeenCalled()
  })
})
