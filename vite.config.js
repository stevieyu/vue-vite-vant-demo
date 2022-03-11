import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from '@rollup/plugin-eslint';
import {createStyleImportPlugin} from 'vite-plugin-style-import';
import unocss from 'unocss/vite';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src'),
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    !isProd && {
      ...eslint({
        fix: true,
        formatter: 'friendly',
        include: /.*\.(vue|js|jsx|ts|tsx)$/m,
        exclude: [/node_modules|vue&type/, /^src/],
      }),
      enforce: 'pre',
    },
    pages({
      dirs: 'src/pages',
      importMode: 'async',
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `${__dirname}/node_modules/vant/es/${name}/style`,
        },
      ],
    }),
    unocss({}),
    vueJsx(),
    vue(),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
    exclude: [
    ],
  },
});
