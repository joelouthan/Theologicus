addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const userAgent = request.headers.get('User-Agent')

  if (userAgent && userAgent.includes('Bytespider')) {
    return new Response('Access denied', { status: 403 })
  }

  // Continue with normal request handling
  return fetch(request)
}
