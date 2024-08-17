
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Category from './pages/Category'


//parent component
function App() { //functional component

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App
