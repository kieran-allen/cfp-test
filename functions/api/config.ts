export const onRequestGet: PagesFunction = context => {
  const host = context.request.headers.get('Host') ?? 'dev.qwonk.xyz'

  switch (host) {
    case 'dev.qwonk.xyx':
      return new Response(JSON.stringify({ url: 'api.dev.qwonk.xyz' }))
    case 'sandbox.qwonk.xyx':
      return new Response(JSON.stringify({ url: 'api.sandbox.qwonk.xyz' }))
    case 'qwonk.xyx':
    case 'www.qwonk.xyx':
      return new Response(JSON.stringify({ url: 'api.qwonk.xyz' }))
    default:
      return new Response(JSON.stringify({ url: 'api.dev.qwonk.xyz' }))
  }
}
