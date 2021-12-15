import { Config, ENV } from '../types/Config'

export const development: Config = {
  env: ENV.DEV,
  api: 'api.dev.qwonk.xyz',
  flags: {
    mswEnabled: true,
    countryPickerEnabled: true,
  },
}

export const sandbox: Config = {
  env: ENV.BOX,
  api: 'api.sandbox.qwonk.xyz',
  flags: {
    mswEnabled: false,
    countryPickerEnabled: true,
  },
}

export const production: Config = {
  env: ENV.PROD,
  api: 'api.qwonk.xyz',
  flags: {
    mswEnabled: false,
    countryPickerEnabled: false,
  },
}
