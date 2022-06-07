import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // add from here, plus the import path from 'path'
    vite: {
      resolve: {
        alias: {
          // these are the aliases and paths to them
          '@components': path.resolve('./src/lib/components'),
          '@lib': path.resolve('./src/lib')
        }
      }
    }
  }
};

export default config;
