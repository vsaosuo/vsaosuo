import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'
import { Reveal } from '../components/Reveal'

export default function Blog() {
  return (
    <>
      <title>Blog — Visal Saosuo</title>
      <meta name="description" content="Writing about embedded systems, hardware, and software." />
      <link rel="canonical" href="https://vsaosuo.github.io/blog" />

      <div>
        <Reveal>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Blog</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Writing about embedded systems, hardware, and software.
          </p>
        </Reveal>

        {posts.length === 0 ? (
          <p className="mt-10 text-gray-500 dark:text-gray-400">No posts yet.</p>
        ) : (
          <ul className="mt-10 space-y-8">
            {posts.map((post, i) => (
              <li key={post.slug}>
                <Reveal delay={i * 0.05}>
                  <Link to={`/blog/${post.slug}`} className="group block">
                    <time
                      dateTime={post.date}
                      className="text-xs text-gray-400 dark:text-gray-500 tabular-nums"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {post.description}
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
