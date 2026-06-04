import type { FC } from 'react'

export type ProjectFrontmatter = {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

type ProjectModule = {
  frontmatter: ProjectFrontmatter
  default: FC
}

// Controls listing order — projects have no publication date to sort on.
const ORDER = ['fpga-synthesizer', 'embedded-datalogger', 'portfolio', 'pcb-power-supply']

const modules = import.meta.glob<ProjectModule>('../projects/*/index.mdx', { eager: true })

export type Project = ProjectFrontmatter & {
  slug: string
  Component: FC
}

export const projects: Project[] = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.replace('../projects/', '').replace('/index.mdx', ''),
    ...mod.frontmatter,
    Component: mod.default,
  }))
  .sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug))
