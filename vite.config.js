import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';
import components from 'unplugin-vue-components/vite';
import {VantResolver as vantResolver} from 'unplugin-vue-components/resolvers';
import unocss from 'unocss/vite';


const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.npm_lifecycle_event === 'gh' ? '/vue-vite-vant-demo/' : '/',
  plugins: [
    !isProd && {
      ...eslint({
        fix: true,
        formatter: 'friendly',
      }),
      enforce: 'pre',
    },
    components({
      dirs: ['src/components/import'],
      resolvers: [
        vantResolver(),
      ],
    }),
    unocss({}),
    vueJsx(),
    vue({
      reactivityTransform: true,
    }),
    pages({
      dirs: 'src/pages',
      importMode: 'async',
    }),
    layouts(),
  ],
  // optimizeDeps: {
  //   include: [
  //     'vue',
  //     'vue-router',
  //   ],
  //   exclude: [
  //   ],
  // },
  server: {
    headers: {
      // 'Cross-Origin-Embedder-Policy': 'require-corp',
      // 'Cross-Origin-Opener-Policy': 'same-origin',
      // 'Cross-Origin-Resource-Policy': 'cross-origin' // use Opener-Policy, cross need this
    },
  },
  build: {
    manifest: true,
  },
});
