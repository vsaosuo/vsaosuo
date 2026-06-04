import { Link, useParams } from 'react-router-dom'
import { projects } from '../lib/projects'
import { Reveal } from '../components/Reveal'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <title>Project not found — Visal Saosuo</title>
        <div className="pt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">Project not found.</p>
          <Link
            to="/projects"
            className="mt-4 inline-block text-sm text-gray-900 dark:text-white hover:underline"
          >
            ← Back to projects
          </Link>
        </div>
      </>
    )
  }

  const { Component } = project

  return (
    <>
      <title>{project.title} — Visal Saosuo</title>
      <meta name="description" content={project.description} />
      <link rel="canonical" href={`https://vsaosuo.github.io/projects/${project.slug}`} />

      <article className="max-w-2xl">
        <Reveal>
          <Link
            to="/projects"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Projects
          </Link>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4 text-sm">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                GitHub ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Live ↗
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="prose prose-gray dark:prose-invert mt-8 max-w-none">
            <Component />
          </div>
        </Reveal>
      </article>
    </>
  )
}
