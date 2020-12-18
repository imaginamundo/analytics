import { Router } from 'https://deno.land/x/oak/mod.ts';
import settings from './settings.js';
import updateData, { data } from './data.js';
import setHeaders from './setHeaders.js';

const router = new Router();
router
  .get('/', context => {
    console.log(context.request.url.href);
    context.response.body = 'Simple analytics';
  })
  .get('/view', context => {
    console.log(context.request.headers.get('Referer'));
    const url = new URL(context.request.headers.get('Referer'));
    context.response.headers.set(
      'Access-Control-Allow-Origin',
      `${ url.protocol }//${ settings.hostname }`
    );
    context.response.body = data;
  })
  .get('/update', context => {
    const url = new URL(context.request.headers.get('Referer'));
    console.log(context.request.url.href);
    updateData(context);
    context.response.headers.set('Access-Control-Allow-Origin', '');
    context.response.body = 'Check';
  })
  .get('/(.*)', context => {
    console.log(context.request.url.href);
    context.response.status = 404;
    context.response.body = 'Not found';
  });

export default router;