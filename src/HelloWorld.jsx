import { useState } from 'react'
import logo from './logo.svg'
import './HelloWorld.css'

function HelloWorld() {
  const [count, setCount] = useState(0)

  return (
    <div className="HelloWorld">
      <header className="HelloWorld-header">
        <img src={logo} className="HelloWorld-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

      </header>
    </div>
  )
}

export default HelloWorld
