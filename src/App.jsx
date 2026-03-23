import React from 'react'
import Scene from './components/canvas/Scene'
import Overlay from './components/dom/Overlay'

function App() {
  return (
    <main className="w-full relative min-h-screen">
      <Scene />
      <Overlay />
    </main>
  )
}

export default App
