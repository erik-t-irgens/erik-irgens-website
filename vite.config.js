import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` produces the normal multi-file bundle in dist/.
// `npm run build:preview` inlines everything into one HTML file in
// dist-preview/ so the site can be previewed from a single file.
export default defineConfig(({ mode }) => {
  const preview = mode === 'preview'
  return {
    plugins: [react(), ...(preview ? [viteSingleFile({ removeViteModuleLoader: true })] : [])],
    build: {
      outDir: preview ? 'dist-preview' : 'dist',
      sourcemap: false,
    },
  }
})
