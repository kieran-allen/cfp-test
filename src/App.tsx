import clsx from 'clsx'
import { useConfig } from './context/ConfigContext'

export function App() {
  const { isLoading, data } = useConfig()

  if (isLoading) {
    return (
      <h1 className={clsx('bg-gray-100', 'm-8', 'rounded', 'p-8', 'shadow')}>
        loading...
      </h1>
    )
  }

  return (
    <h1 className={clsx('bg-gray-100', 'm-8', 'rounded', 'p-8', 'shadow')}>
      This is {data?.env} {JSON.stringify(data)}
    </h1>
  )
}
