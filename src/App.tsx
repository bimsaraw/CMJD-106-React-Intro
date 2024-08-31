
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Category from './pages/Category'
import Product from './pages/Product'
import Order from './pages/orders/Order'
import CreateOrder from './pages/orders/CreateOrder'


//parent component
function App() { //functional component

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/create" element={<CreateOrder />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App
