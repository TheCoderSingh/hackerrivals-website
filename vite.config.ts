import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), eslintPlugin({})],
  build: {
    // Enable minification for better performance
    minify: 'esbuild',
    // Generate source maps for debugging (disable in production if needed)
    sourcemap: false,
    // Optimize asset handling
    assetsDir: 'assets',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['iconoir-react'],
        },
        // Asset filename patterns for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || '')) {
            extType = 'img';
          } else if (/woff2?|eot|ttf|otf/i.test(extType || '')) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'iconoir-react'],
  },
  // Enable experimental features for better performance
  esbuild: {
    // Remove console logs and debugger statements in production
    drop: ['console', 'debugger'],
  },
  // Server configuration for development
  server: {
    port: 3000,
    open: true,
  },
  // Define base URL for deployment
  base: '/hackerrivals-website/',
});
