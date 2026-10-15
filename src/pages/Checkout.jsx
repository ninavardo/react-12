import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((product) => (
            <li key={product.id} className="border-b border-gray-300 pb-2">
              <span className="font-semibold">{product.title}</span>
              <span className="ml-3">${product.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Checkout
