import { Link } from "react-router-dom";
import Vehicle from "../components/Vehicle";
import { useState } from "react";

function Home() {

  //react hooks - useState hook
  const [username, setUsername] = useState<string>("");
  const [count, setCount] = useState(0);

  function handleInputChange(event: any) {
    setUsername(event.target.value);
  }

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Hello {username}</h1>
      <p>Feel free to edit this to start building something awesome.</p>

      <Link to="/profile">Profile</Link>

      <label>Enter username </label>
      <input type="text" onChange={handleInputChange} /> 


      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>



      <h2>Vehicles</h2>
      <Vehicle title="Toyota Corolla" description="Toyota corolla is the highest sold vehicle" />
      <Vehicle title="Toyota Landcruiser" description="Landcruiser is a reliable 4X4" />
    </div>
  )
}

export default Home;