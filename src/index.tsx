import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from './App'
import { ConfigProvider } from './context/ConfigContext'

import './style.css'

const anchor = document.getElementById('app')
const queryClient = new QueryClient()

render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </QueryClientProvider>,
  anchor,
)
