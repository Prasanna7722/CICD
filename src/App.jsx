import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app-container'>
      <h1>👋 Welcome to My React Project – S211
🚀 CI/CD & Cloud DevOps in Action
This is a lightweight React homepage, seamlessly built with Vite and automatically deployed using GitHub Actions.

🔗 Hosted via GitHub Pages
⚙️ CI/CD powered by GitHub Actions
⚡ Built for speed, reliability, and simplicity</h1>
      </div>
    </>
  )
}

export default App
