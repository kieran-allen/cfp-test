import clsx from 'clsx'
import { useQuery } from 'react-query'

export function App() {
  const { isLoading, data } = useQuery('f', async () => {
    const res = await fetch('/api/config')
    return await res.json()
  })

  if (isLoading) {
    return (
      <h1 className={clsx('bg-gray-100', 'm-8', 'rounded', 'p-8', 'shadow')}>
        loading...
      </h1>
    )
  }
  return (
    <h1 className={clsx('bg-gray-100', 'm-8', 'rounded', 'p-8', 'shadow')}>
      This is DEV build 2 {JSON.stringify(data)}
    </h1>
  )
}
