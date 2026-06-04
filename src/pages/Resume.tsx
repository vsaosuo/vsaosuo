import { profile } from '../data/profile'

export default function Resume() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Resume</h1>
        <a
          href={profile.links.resume}
          download
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
        <iframe
          src={profile.links.resume}
          title="Visal Saosuo — Resume"
          className="hidden h-[80vh] w-full md:block"
        />
        <div className="flex flex-col items-center justify-center gap-3 p-10 text-center md:hidden">
          <p className="text-sm text-gray-500">PDF preview is best on desktop.</p>
          <a
            href={profile.links.resume}
            download
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Download PDF instead
          </a>
        </div>
      </div>
    </div>
  )
}
