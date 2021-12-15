export const onRequestGet: PagesFunction = context => {
  const ref = context.request.referrer

  return new Response(ref)
}
