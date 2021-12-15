export enum ENV {
  DEV = 'development',
  BOX = 'sandbox',
  PROD = 'production',
}

export type Config = {
  api: string
  env: ENV
  flags: {
    mswEnabled: boolean
    countryPickerEnabled: boolean
  }
}
