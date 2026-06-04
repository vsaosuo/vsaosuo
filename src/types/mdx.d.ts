declare module '*.mdx' {
  import type { FC } from 'react'
  const MDXContent: FC
  export default MDXContent
  // Each content type (posts, projects) has its own frontmatter shape;
  // lib files use import.meta.glob<TypedModule> to get typed frontmatter.
  export const frontmatter: Record<string, unknown>
}
