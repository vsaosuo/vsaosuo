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

      {/* PDF embed placeholder — replace src with real path in Phase 2 */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        <div className="flex h-[70vh] items-center justify-center text-gray-400 text-sm">
          PDF will be embedded here
          <br />
          <span className="text-xs mt-1 block text-center">
            Add resume.pdf to public/ and update the embed src
          </span>
        </div>
      </div>
    </div>
  )
}
