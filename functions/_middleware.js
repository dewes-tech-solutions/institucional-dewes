export async function onRequest(context) {
  const response = await context.next();

  if (response.status === 404) {
    const notFoundResponse = await context.env.ASSETS.fetch(
      new URL('/404.html', context.request.url)
    );
    return new Response(notFoundResponse.body, {
      status: 404,
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    });
  }

  return response;
}
