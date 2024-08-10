import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//parent component
function App() { //functional component
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>This is my first React App</h1>
      <p>Feel free to edit this to start building something awesome.</p>

      <h2>Vehicles</h2>
      <Vehicle title="Toyota Corolla" description="Toyota corolla is the highest sold vehicle" />
      <Vehicle title="Toyota Landcruiser" description="Landcruiser is a reliable 4X4" />
    </div>
  )
}

interface VehicleType {
  title: string,
  description: string,
}

//child component
function Vehicle(props: VehicleType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default App
