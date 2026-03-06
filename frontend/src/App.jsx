import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const API_BASE = import.meta.env.VITE_API_URL ?? ''

function App() {
  const [count, setCount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCount = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/count`)
      if (!res.ok) throw new Error('Failed to fetch count')
      const data = await res.json()
      setCount(data.count)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCount()
  }, [])

  const increment = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/count/increment`, {
        method: 'POST',
      })
      if (!res.ok) throw new Error('Failed to increment')
      const data = await res.json()
      setCount(data.count)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {loading && <p>Loading…</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <button onClick={increment}>
            count is {count}
          </button>
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
