// @ts-ignore
import { defineConfig, loadEnv } from 'vite';

// @ts-ignore
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    preview: {
      port: Number(process.env.PORT) || 4173,
      strictPort: true
    }
  };
});

