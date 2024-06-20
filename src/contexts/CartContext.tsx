import { ReactNode, createContext, useState } from 'react'

interface Product {
  title: string
  price: number
}

export interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
}

interface CartProps {
  cart: CartItem[]
  isPurchased: boolean
  purchaseAmount?: number
}

interface CartContextType {
  // cart: CartItem[]
  cartState: CartProps
  createCartItem: (product: Product) => void
  updateCartQuantity: (
    item: CartItem,
    operation: 'increment' | 'decrement',
  ) => void
  removeItemFromCart: (item: CartItem) => void
  totalCartAmount: number
  finishPurchase: () => CartItem[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)
export function CartContextProvider({ children }: CartContextProviderProps) {
  const initialState = () => {
    const storagedCartAsJSON = localStorage.getItem('cart')

    if (storagedCartAsJSON) {
      return JSON.parse(storagedCartAsJSON)
    }

    return { cart: [], isPurchased: false }
  }

  const [cartState, setCartState] = useState<CartProps>(initialState)

  function createCartItem(product: Product) {
    const { cart } = cartState
    const { title, price } = product
    const cartItem: CartItem = {
      id: String(cart.length + 1),
      title,
      price,
      quantity: 1,
    }
    const newCart = [...cart, cartItem]
    const newCartState = { cart: newCart, isPurchased: false }
    setCartState(newCartState)
    localStorage.setItem('cart', JSON.stringify(newCartState))
  }

  function updateCartQuantity(
    item: CartItem,
    operation: 'increment' | 'decrement',
  ) {
    const { cart } = cartState
    const newCart = [...cart]
    const searchItemIndex = newCart.findIndex(
      (searchItem) => item.id === searchItem.id,
    )

    operation === 'increment'
      ? (newCart[searchItemIndex].quantity += 1)
      : newCart[searchItemIndex].quantity
        ? (newCart[searchItemIndex].quantity -= 1)
        : 0

    const newCartState = { cart: newCart, isPurchased: false }
    setCartState(newCartState)
    localStorage.setItem('cart', JSON.stringify(newCartState))
  }

  const totalCartAmount = cartState.cart.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0,
  )

  function removeItemFromCart(item: CartItem) {
    const { cart } = cartState
    const newCart = [...cart]
    const searchItemIndex = newCart.findIndex(
      (searchItem) => item.id === searchItem.id,
    )
    newCart.splice(searchItemIndex, 1)

    const newCartState = { cart: newCart, isPurchased: false }
    setCartState(newCartState)
    localStorage.setItem('cart', JSON.stringify(newCartState))
  }

  function finishPurchase() {
    const { cart } = cartState
    const cartFinishedPurchaseState = [...cart]

    const newCartState = {
      cart: [],
      isPurchased: true,
      purchaseAmount: totalCartAmount,
    }
    setCartState(newCartState)
    localStorage.setItem('cart', JSON.stringify(newCartState))

    return cartFinishedPurchaseState
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        createCartItem,
        updateCartQuantity,
        totalCartAmount,
        removeItemFromCart,
        finishPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
