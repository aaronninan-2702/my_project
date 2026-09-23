import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [backendStatus, setBackendStatus] = useState('Connecting...')

  useEffect(() => {
    fetch('http://localhost:5000/api/status')
      .then((response) => response.json())
      .then((data) => {
        setBackendStatus(data.message)
      })
      .catch(() => {
        setBackendStatus('Backend connection failed')
      })
  }, [])

  return (
    <div>
      <h1>React + Express Application</h1>

      <p>Frontend is running successfully.</p>

      <p>Backend status:</p>

      <strong>{backendStatus}</strong>
    </div>
  )
}

export default App