import { profile } from '../data/profile'

export default function Resume() {
  return (
    <>
      <title>Resume — Visal Saosuo</title>
      <meta name="description" content="Resume of Visal Saosuo, Computer Engineering graduate." />
      <link rel="canonical" href="https://vsaosuo.github.io/resume" />

      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Resume
          </h1>
          <a
            href={profile.links.resume}
            download
            className="rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
          >
            Download PDF
          </a>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
          <iframe
            src={profile.links.resume}
            title="Visal Saosuo — Resume"
            className="hidden h-[80vh] w-full md:block"
          />
          <div className="flex flex-col items-center justify-center gap-3 p-10 text-center md:hidden">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              PDF preview is best on desktop.
            </p>
            <a
              href={profile.links.resume}
              download
              className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Download PDF instead
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
