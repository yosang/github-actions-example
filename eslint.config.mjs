import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Most JavaScript files
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },

  // Test files
  {
    files: ['**/*.test.{js,mjs,cjs}'],
    languageOptions: { globals: globals.jest },
  },
]);
