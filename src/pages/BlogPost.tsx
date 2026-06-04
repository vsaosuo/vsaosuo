import { Link, useParams } from 'react-router-dom'
import { posts } from '../lib/posts'
import { Reveal } from '../components/Reveal'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <>
        <title>Post not found — Visal Saosuo</title>
        <div className="pt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">Post not found.</p>
          <Link
            to="/blog"
            className="mt-4 inline-block text-sm text-gray-900 dark:text-white hover:underline"
          >
            ← Back to blog
          </Link>
        </div>
      </>
    )
  }

  const { Component } = post

  return (
    <>
      <title>{post.title} — Visal Saosuo</title>
      <meta name="description" content={post.description} />
      <link rel="canonical" href={`https://vsaosuo.github.io/blog/${post.slug}`} />

      <article className="max-w-2xl">
        <Reveal>
          <Link
            to="/blog"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Blog
          </Link>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="mt-2 block text-sm text-gray-400 dark:text-gray-500"
          >
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
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
