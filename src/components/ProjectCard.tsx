import { Link } from 'react-router-dom'
import type { Project } from '../lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
      <h2 className="font-semibold text-gray-900 dark:text-white">{project.title}</h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 line-clamp-3">
        {project.description}
      </p>
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
        <Link
          to={`/projects/${project.slug}`}
          className="text-gray-900 dark:text-white font-medium hover:underline"
        >
          Read more →
        </Link>
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
    </div>
  )
}
