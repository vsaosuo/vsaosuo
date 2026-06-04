import type { FC } from 'react'

export type PostFrontmatter = {
  title: string
  date: string
  description: string
}

type PostModule = {
  frontmatter: PostFrontmatter
  default: FC
}

const modules = import.meta.glob<PostModule>('../posts/*/index.mdx', { eager: true })

export type Post = PostFrontmatter & {
  slug: string
  Component: FC
}

export const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.replace('../posts/', '').replace('/index.mdx', '')
    return { slug, ...mod.frontmatter, Component: mod.default }
  })
  .sort((a, b) => b.date.localeCompare(a.date))
