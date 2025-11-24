import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnpluginInjectPreload from 'unplugin-inject-preload/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnpluginInjectPreload({
      files: [
        { entryMatch: /[a-zA-Z]*\.jpg$/ },
        { entryMatch: /[a-zA-Z]*\.webp$/ },
      ],
    }),
  ],
});
