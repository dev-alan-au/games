import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div id="appContainer">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/xo">Naughts and Croxxes</Link></li>
          <li><Link to="/pairs">Pairs</Link></li>
          <li><Link to="/hangman">Hang Man</Link></li>
          <li><Link to="/scissors-paper-rock">Scissors Paper Rock</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}