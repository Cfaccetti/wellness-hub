import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/" className="site-title">
        Wellness Hub
      </Link>
      <ul>
        <CustomLink to="/habits">Habit Tracker</CustomLink>
        <CustomLink to="/meditation">Meditation</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}