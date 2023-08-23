import { lazy } from 'react';
const Xo = lazy(() => import('xo/App'));

function App() {
  return (
    <>
      <Xo />
    </>
  )
}

export default App
