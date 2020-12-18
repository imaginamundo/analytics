import settings from './settings.js';

export default function setHeaders(context) {
  const url = new URL(context.request.headers.get('Referer'));

  context.response.headers.set(
    'Access-Control-Allow-Origin',
    `${ url.protocol }//${ settings.hostname }`
  );
}