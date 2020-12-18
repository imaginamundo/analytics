import { Application } from 'https://deno.land/x/oak/mod.ts';
import settings from './settings.js';
import router from './router.js';

const app = new Application();

app.use((context, next) => {
  let url = context.request.headers.get('Referer');
  if (url) {
    url = new URL(url);
    let allow = `${ url.protocol }//${ settings.hostname }`;
    if (url.port) allow += `:${ url.port }`;
    context.response.headers.set('Access-Control-Allow-Methods', 'GET');
    context.response.headers.set('Access-Control-Allow-Origin', allow);
  }
  return next();
});
app.use(router.routes());
app.use(router.allowedMethods());


console.log(`Running on http://localhost:${ settings.port }`);

await app.listen({ port: settings.port });