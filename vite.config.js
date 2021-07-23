import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import voie from 'vite-plugin-voie';
import eslint from '@rollup/plugin-eslint';
import styleImport from 'vite-plugin-style-import';

const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    !isProd && {
      ...eslint({
        fix: true,
        formatter: 'friendly',
        include: /.*\.(vue|js|jsx|ts|tsx)$/m,
        exclude: [/node_modules|vue&type/, /^src/],
      }),
      enforce: 'pre'
    },
    {
      ...voie(),
      enforce: 'pre'
    },
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
    vue(),
  ]
})
