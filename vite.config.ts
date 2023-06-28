import { type PluginOption, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      brotliSize: true,
      gzipSize: true,
      // filename: '.visual/stats.html',
      open: false,
      emitFile: true,
    }) as PluginOption,
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: true,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: true,
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.44.20:9001',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
