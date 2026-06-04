import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h1>
      <p className="mt-2 text-gray-500">Things I've designed, built, and shipped.</p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  )
}
