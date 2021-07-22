import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import voie from 'vite-plugin-voie';
import styleImport from 'vite-plugin-style-import';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...voie({
        pagesDir: 'src/views',
        // importMode: 'sync',
      }),
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
