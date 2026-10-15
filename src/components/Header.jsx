import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { CartContext } from '../context/CartContext'

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <header className="bg-blue-500 text-white p-3 flex items-center gap-6">
      <Link to="/" className="underline">
        Home
      </Link>
      <Link to="/checkout" className="underline">
        Checkout
      </Link>
      <div className="flex items-center gap-1 ml-auto">
        <ShoppingCart size={22} />
        <span>{cart.length}</span>
      </div>
    </header>
  )
}

export default Header
