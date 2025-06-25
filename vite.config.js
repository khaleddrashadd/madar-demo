import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
// import { visualizer } from 'rollup-plugin-visualizer';
import fg from 'fast-glob';

const ReactCompilerConfig = {};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    // visualizer({
    //   open: false,
    //   filename: 'dist/stats/index.html',
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
    svgr({
      // SVGR options
      svgrOptions: {
        // icon: true, // Optional - if you're using icons
        exportType: 'default', // Use default export
        ref: true, // Optional - if you need ref support
        svgo: true, // Optimize SVGs
        titleProp: true, // Add title prop support
      },
      // Include files ending in ?react
      include: '**/*.svg?react',
    }),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react-error-boundary'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and related libraries
          'react-vendor': ['react', 'react-dom', 'react-router'],

          // Split charting libraries (I can see recharts in your bundle)
          charts: ['recharts'],

          // Split utility libraries
          utils: [
            'lodash',
            'date-fns',
            'axios',
            'dayjs',
            '@tanstack/react-query',
            'react-hook-form',
            'yup',
          ],

          // Split UI component libraries
          ui: ['tailwind-merge', 'lucide-react'],
          'radix-ui': [
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-select',
            '@radix-ui/react-popover',
            '@radix-ui/react-tabs',
            '@radix-ui/react-alert-dialog',
            // Add any other Radix UI components you're using
          ],
          state: ['redux', 'redux-persist', '@reduxjs/toolkit'],

          'feature-dashboard': ['./src/pages/Home.jsx'],
          'feature-contracts': ['./src/pages/Contracts.jsx'],
          'feature-invoices': fg.sync('./src/pages/invoices-approval/**/*.jsx'),
        },
      },
    },
  },
});
