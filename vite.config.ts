import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  plugins: [
    // MDX must run before React so JSX is already resolved when React plugin sees it
    {
      enforce: 'pre',
      ...mdx({
        jsxImportSource: 'react',
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    tailwindcss(),
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
})
