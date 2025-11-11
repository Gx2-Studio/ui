import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: true,
  loader: {
    '.css': 'copy',
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
  // Suppress "use client" directive warnings (expected behavior for React Server Components)
  onSuccess: async () => {
    console.log('✓ Build completed successfully')
  },
})