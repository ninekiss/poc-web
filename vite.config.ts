import { type PluginOption, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      brotliSize: true,
      gzipSize: true,
      filename: '.visual/stats.html',
      open: true,
    }) as PluginOption,
  ],
});
