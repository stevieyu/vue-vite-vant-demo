import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, {VantResolver} from 'vite-plugin-components'
import styleImport from 'vite-plugin-style-import';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteComponents({
      deep: false,
      customComponentResolvers: [
        VantResolver(),
      ]
    }),
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
