import { useState } from 'react'
import './index.css'
import  ClickBar  from './ClickBar'
function App() {
  const [count, setCount] = useState(0)

  return(<><ClickBar/>
  </>)
}

export default App
