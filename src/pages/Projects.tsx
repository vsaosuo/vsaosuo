import { projects } from '../lib/projects'
import ProjectCard from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'

export default function Projects() {
  return (
    <>
      <title>Projects — Visal Saosuo</title>
      <meta name="description" content="Things I've designed, built, and shipped." />
      <link rel="canonical" href="https://vsaosuo.github.io/projects" />

      <div>
        <Reveal>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Things I've designed, built, and shipped.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Reveal delay={i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
