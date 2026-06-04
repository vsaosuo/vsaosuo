import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const FEATURED_COUNT = 3

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-12 pb-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{profile.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">{profile.headline}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={profile.links.resume}
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            Resume
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900">About</h2>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start">
          {/* Photo */}
          <div className="shrink-0">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-36 w-36 rounded-xl object-cover"
              />
            ) : (
              <div className="h-36 w-36 rounded-xl bg-gray-100" aria-hidden="true" />
            )}
          </div>
          {/* Text */}
          <div>
            <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
            <p className="mt-3 text-sm text-gray-500">
              <span className="font-medium text-gray-700">Currently:</span>{' '}
              {profile.currentlyWorkingOn}
            </p>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Featured projects</h2>
          <Link to="/projects" className="text-sm text-gray-500 hover:text-gray-900">
            All projects →
          </Link>
        </div>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.slice(0, FEATURED_COUNT).map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {profile.skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {category}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p className="mt-2 text-gray-600">
          I'm open to new opportunities and interesting collaborations. Reach out via LinkedIn or
          browse my work on GitHub.
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </div>
  )
}
