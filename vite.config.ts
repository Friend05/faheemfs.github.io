import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const [repositoryOwner = '', repositoryName = ''] = (process.env.GITHUB_REPOSITORY ?? '/').split('/')
const userOrOrgPagesPrefix = repositoryName.replace(/\.github\.io$/i, '')
const isUserOrOrgPagesRepo =
  repositoryName.endsWith('.github.io') &&
  repositoryOwner.toLowerCase() === userOrOrgPagesPrefix.toLowerCase()
const base =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserOrOrgPagesRepo
    ? `/${repositoryName}/`
    : '/'

export default defineConfig({
  base,
  build: {
    // Keep build artifacts in the output root so manual GitHub uploads
    // work without creating an assets/ folder in the repository.
    assetsDir: '',
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
