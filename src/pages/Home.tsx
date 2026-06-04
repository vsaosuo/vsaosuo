import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../lib/projects'
import ProjectCard from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'

const FEATURED_COUNT = 3

export default function Home() {
  return (
    <>
      <title>Visal Saosuo — Portfolio</title>
      <meta name="description" content={profile.headline} />
      <link rel="canonical" href="https://vsaosuo.github.io/" />

      <div className="space-y-20">
        {/* Hero */}
        <Reveal>
          <section className="pt-12 pb-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              {profile.headline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.links.resume}
                className="rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                Resume
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </Reveal>

        {/* About */}
        <Reveal>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About</h2>
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start">
              <div className="shrink-0">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-36 w-36 rounded-xl object-cover"
                  />
                ) : (
                  <div className="h-36 w-36 rounded-xl bg-gray-100 dark:bg-gray-800" aria-hidden="true" />
                )}
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{profile.bio}</p>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Currently:</span>{' '}
                  {profile.currentlyWorkingOn}
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Featured projects */}
        <Reveal>
          <section>
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Featured projects
              </h2>
              <Link
                to="/projects"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                All projects →
              </Link>
            </div>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {projects.slice(0, FEATURED_COUNT).map((project, i) => (
                <li key={project.slug}>
                  <Reveal delay={i * 0.05}>
                    <ProjectCard project={project} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              {profile.skills.map(({ category, items }, i) => (
                <Reveal key={category} delay={i * 0.05}>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {category}
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Contact */}
        <Reveal>
          <section id="contact">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              I'm open to new opportunities and interesting collaborations. Reach out via LinkedIn or
              browse my work on GitHub.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  )
}
