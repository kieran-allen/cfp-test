export const onRequestGet: PagesFunction = context => {
  const host = context.request.headers.get('Host')

  return new Response(`${host};;host`)
}
