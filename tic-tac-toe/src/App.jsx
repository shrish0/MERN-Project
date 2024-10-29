import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid/grid'

function App() {
  return (
    <>
      <Grid numberOfCards={9} />
    </>
  )
}

export default App
