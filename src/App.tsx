import clsx from 'clsx'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    fetch('/api/hello')
  }, [])
  return (
    <h1 className={clsx('bg-gray-100', 'm-8', 'rounded', 'p-8', 'shadow')}>
      This is DEV build 2
    </h1>
  )
}
