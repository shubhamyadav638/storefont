// netlify/functions/render.ts

import {Handler, Context} from 'netlify/functions';
import {createRequestHandler} from '@shopify/hydrogen';

const handler: Handler = async (event, context: Context) => {
  const hydrogenHandler = createRequestHandler({
    getLoadContext() {
      return {}; // You can pass any custom context here
    },
  });

  // Pass the event and context to the Hydrogen SSR handler
  return hydrogenHandler(event, context);
};

export {handler};
