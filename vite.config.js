import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function generateHtaccess () {

  // Resolved Vite configuration, including "base" option
  let viteConfig;

  return {
    name: 'generate-htaccess',

    // Rollup Plugin API output generation hook
    // See https://rollupjs.org/guide/en/#generatebundle
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: '.htaccess',
        source: `ErrorDocument 404 ${viteConfig.base}\n`
      });
    },

    // Vite Plugin API specific hook
    // See https://vitejs.dev/guide/api-plugin.html#configresolved
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
    },
  };
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/dist/' : './',
})
