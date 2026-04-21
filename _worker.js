const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-XSS-Protection': '1; mode=block',
};

const CACHE_RULES = [
  { match: /\.html$/,              value: 'public, max-age=3600' },
  { match: /^\/favicon\.svg$/,     value: 'public, max-age=604800' },
  { match: /^\/favicon-.*\.png$/,  value: 'public, max-age=604800' },
  { match: /^\/apple-touch-icon/,  value: 'public, max-age=604800' },
  { match: /^\/og-image\.png$/,    value: 'public, max-age=86400' },
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (response.status === 404) {
      const notFound = await env.ASSETS.fetch(new URL('/404.html', request.url));
      response = new Response(notFound.body, {
        status: 404,
        headers: notFound.headers,
      });
    }

    const headers = new Headers(response.headers);

    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(key, value);
    }

    for (const rule of CACHE_RULES) {
      if (rule.match.test(url.pathname)) {
        headers.set('Cache-Control', rule.value);
        break;
      }
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
