import { development, production, sandbox } from '../../src/constants/config'

type Host =
  | 'dev.qwonk.xyz'
  | 'sandbox.qwonk.xyz'
  | 'qwonk.xyz'
  | 'www.qwonk.xyz'
  | null

export const onRequestGet: PagesFunction = ({ request: { headers } }) => {
  const host: Host = headers.get('Host') as Host

  switch (host) {
    case 'dev.qwonk.xyz':
      return new Response(JSON.stringify(development), {
        headers: { 'Content-Type': 'application/json' },
      })
    case 'sandbox.qwonk.xyz':
      return new Response(JSON.stringify(sandbox), {
        headers: { 'Content-Type': 'application/json' },
      })
    case 'qwonk.xyz':
    case 'www.qwonk.xyz':
      return new Response(JSON.stringify(production), {
        headers: { 'Content-Type': 'application/json' },
      })
    default:
      return new Response(JSON.stringify(development), {
        headers: { 'Content-Type': 'application/json' },
      })
  }
}
