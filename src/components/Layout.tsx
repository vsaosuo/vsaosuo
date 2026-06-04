import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/resume', label: 'Resume' },
]

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export default function Layout() {
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'font-medium text-gray-900 dark:text-white'
      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
          <span className="font-semibold tracking-tight">Visal Saosuo</span>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6 text-sm items-center">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={toggle}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </li>
          </ul>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="mx-auto max-w-4xl flex flex-col gap-1 pt-3 pb-2 text-sm">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `block py-2 ${linkClass({ isActive })}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 px-6 py-4 text-center text-sm text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} Visal Saosuo
      </footer>
    </div>
  )
}
