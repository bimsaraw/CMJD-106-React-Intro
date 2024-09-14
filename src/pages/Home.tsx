import { Link } from "react-router-dom";
import Vehicle from "../components/Vehicle";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Home() {

  //react hooks - useState hook
  const [username, setUsername] = useState<string>("");
  const [count, setCount] = useState(0);

  const { logout } = useAuth()

  function handleInputChange(event: any) {
    setUsername(event.target.value);
  }

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div className="w-full bg-gray-100 p-2 rounded-lg">

        <Link to="/profile" className="bg-gray-800 text-white px-5 py-2 me-3">Profile</Link>

        <Link to="/product" className="bg-gray-800 text-white px-5 py-2 me-3">Product</Link>
        <Link to="/category" className="bg-gray-800 text-white px-5 py-2 me-3">Category</Link>
        <Link to="/order" className="bg-gray-800 text-white px-5 py-2 me-3">Order</Link>

        <button className="bg-gray-800 text-white px-5 py-2 me-3" onClick={logout}>Logout</button>
      </div>
      <h1>Hello {username}</h1>
      <p>Feel free to edit this to start building something awesome.</p>



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