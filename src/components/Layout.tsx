import { NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
]

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 px-6 py-4">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
          <span className="font-semibold tracking-tight">Visal Saosuo</span>
          <ul className="flex gap-6 text-sm">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    isActive ? 'font-medium text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Visal Saosuo
      </footer>
    </div>
  )
}
