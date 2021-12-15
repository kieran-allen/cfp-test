import { Config } from '../types/Config'

export const development: Config = {
  api: 'api.dev.qwonk.xyz',
  flags: {
    msw: true,
  },
}

export const sandbox: Config = {
  api: 'api.sandbox.qwonk.xyz',
  flags: {
    msw: false,
  },
}

export const production: Config = {
  api: 'api.qwonk.xyz',
  flags: {
    msw: false,
  },
}
