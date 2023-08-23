import { Link, Outlet } from 'react-router-dom';

export default function Layout() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/xo">Naughts and Croxxes</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}