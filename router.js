import { Router } from 'https://deno.land/x/oak/mod.ts';
import updateData, { data } from './data.js';

const router = new Router();
router
  .get('/', context => {
    console.log(context.request.url.href);
    context.response.body = 'Simple analytics';
  })
  .get('/view', context => {
    console.log(context.request.href);
    context.response.body = data;
  })
  .get('/update', context => {
    console.log(context.request.url.href);
    updateData(context);
    context.response.body = 'Check';
  })
  .get('/(.*)', context => {
    console.log(context.request.url.href);
    context.response.status = 404;
    context.response.body = 'Not found';
  });

export default router;