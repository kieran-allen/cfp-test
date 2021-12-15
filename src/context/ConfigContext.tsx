import { createContext, useContext } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { Config } from '../types/Config'

export const ConfigContext = createContext<UseQueryResult<Config, unknown>>(
  {} as UseQueryResult<Config, unknown>,
)

export const ConfigProvider: React.FC = ({ children }) => {
  const config = useQuery(
    'config',
    async () => {
      const res = await fetch('/api/config')
      const json: Config = await res.json()
      return json
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  )

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  )
}

export const useConfig = () => {
  const config = useContext(ConfigContext)
  return config
}

export const useFlag = (flag: keyof Config['flags']) => {
  const config = useContext(ConfigContext)

  if (!config.data) {
    return false
  }

  return config.data.flags[flag]
}
