import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` produces the normal multi-file bundle in dist/.
// `npm run build:preview` inlines everything into one HTML file in
// dist-preview/ so the site can be previewed from a single file. The preview
// swaps the 1920px backgrounds for the 960px ones to keep that file small.
function smallBackgrounds() {
  return {
    name: 'preview-small-backgrounds',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      const m = source.match(/^(.*\/bg-[a-z]+)\.webp$/)
      if (!m) return null
      return this.resolve(`${m[1]}-960.webp`, importer, { ...options, skipSelf: true })
    },
  }
}

export default defineConfig(({ mode }) => {
  const preview = mode === 'preview'
  return {
    plugins: [
      react(),
      ...(preview ? [smallBackgrounds(), viteSingleFile({ removeViteModuleLoader: true })] : []),
    ],
    build: {
      outDir: preview ? 'dist-preview' : 'dist',
      sourcemap: false,
    },
  }
})
