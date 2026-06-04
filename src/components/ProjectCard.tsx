import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 p-6 hover:border-gray-400 transition-colors">
      <h2 className="font-semibold text-gray-900">{project.title}</h2>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
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
            className="text-gray-500 hover:text-gray-900"
          >
            GitHub ↗
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-900"
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  )
}
