import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return(<div className="h-16 bg-blue-500">Fixed Height</div>
)
}

export default App
