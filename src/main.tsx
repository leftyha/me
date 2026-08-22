import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Software Engineer · Product Builder</p>
        <h1>Leonardo Mora</h1>
        <p>
          Building software, systems and solutions that transform complex problems
          into working products.
        </p>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
