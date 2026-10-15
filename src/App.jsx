import { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartProvider'
import { CartContext } from './context/CartContext'
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

const products = [
  { id: 1, title: 'Wireless Headphones', price: 120 },
  { id: 2, title: 'Mechanical Keyboard', price: 180 },
  { id: 3, title: 'Gaming Mouse', price: 75 },
  { id: 4, title: 'USB-C Hub', price: 55 },
  { id: 5, title: 'Laptop Stand', price: 90 },
]

function AppRoutes() {
  const { setCart } = useContext(CartContext)

  useEffect(() => {
    setCart(products)
  }, [setCart])

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}

export default App
