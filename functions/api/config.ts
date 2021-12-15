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
      return new Response(JSON.stringify(development))
    case 'sandbox.qwonk.xyz':
      return new Response(JSON.stringify(sandbox))
    case 'qwonk.xyz':
    case 'www.qwonk.xyz':
      return new Response(JSON.stringify(production))
    default:
      return new Response(JSON.stringify(development))
  }
}
