// netlify/functions/render.ts

import {Handler} from '@netlify/functions';
import {createRequestHandler} from '@shopify/hydrogen';

// The function signature for SSR rendering in Hydrogen v2
const handler: Handler = async (event, context) => {
  const hydrogenHandler = createRequestHandler({
    getLoadContext() {
      return {}; // Add any custom context you may need for the request
    },
  });

  // Render the page using Hydrogen's handler
  return hydrogenHandler(event, context);
};

export {handler};
