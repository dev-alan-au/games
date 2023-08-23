import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Xo from 'xo/App';
import Pairs from 'pairs/App';
import Hangman from 'hangman/App';
import SPR from 'spr/App';

import Layout from './Layout';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="xo" element={<Xo />} />
          <Route path="pairs" element={<Pairs />} />
          <Route path="hangman" element={<Hangman />} />
          <Route path="scissors-paper-rock" element={<SPR />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
