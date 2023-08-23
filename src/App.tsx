import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Xo from 'xo/App';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="xo" element={<Xo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
