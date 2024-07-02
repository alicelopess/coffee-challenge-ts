import { ReactNode, createContext, useState } from 'react'

// interface Product {
//   id: string
//   title: string
//   price: number
//   quantity: number
// }

export interface CartItem {
  id?: string
  productId: string
  title: string
  price: number
  quantity: number
  // amount: number
  url: string
}

export interface AddressInfoProps {
  street: string
  number: string | null
  neighborhood: string
  city: string
  state: string
  other: string | null
}

export interface DeliveryInfoProps {
  zipCode: string
  address: {
    street: string
    neighborhood: string
    number?: string | null
    city: string
    state: string
    other?: string | null
  }
}

interface CartProps {
  cart: CartItem[]
  isPurchased: boolean
  purchaseAmount?: number
}

interface CartContextType {
  // cart: CartItem[]
  cartState: CartProps
  createCartItem: (product: CartItem) => void
  updateCartQuantity: (id: string, operation: 'increment' | 'decrement') => void
  removeItemFromCart: (id: string) => void
  totalCartAmount: number
  deliveryInfo: DeliveryInfoProps
  createDeliveryInfo: (addressInfo: AddressInfoProps, zivValue: string) => void
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

  function createCartItem(product: CartItem) {
    const { cart } = cartState
    const { productId, title, price, quantity, url } = product
    const cartItem: CartItem = {
      id: String(cart.length + 1),
      productId,
      title,
      price,
      quantity,
      // amount,
      url,
    }
    const newCart = [...cart, cartItem]
    const newCartState = { cart: newCart, isPurchased: false }
    setCartState(newCartState)
    localStorage.setItem('cart', JSON.stringify(newCartState))

    console.log('Adicionado ao Carrinho!')
  }

  function updateCartQuantity(
    id: string,
    operation: 'increment' | 'decrement',
  ) {
    const { cart } = cartState
    const newCart = [...cart]
    const searchItemIndex = newCart.findIndex(
      (searchItem) => id === searchItem.id,
    )

    operation === 'increment'
      ? (newCart[searchItemIndex].quantity += 1)
      : newCart[searchItemIndex].quantity
        ? (newCart[searchItemIndex].quantity -= 1)
        : (newCart[searchItemIndex].quantity = 1)

    const newCartState = { cart: newCart, isPurchased: false }
    setCartState(newCartState)
    localStorage.setItem('cart', JSON.stringify(newCartState))
  }

  const totalCartAmount = cartState.cart.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0,
  )

  function removeItemFromCart(id: string) {
    const { cart } = cartState
    const newCart = [...cart]
    const searchItemIndex = newCart.findIndex(
      (searchItem) => id === searchItem.id,
    )
    newCart.splice(searchItemIndex, 1)

    const newCartState = { cart: newCart, isPurchased: false }
    setCartState(newCartState)
    localStorage.setItem('cart', JSON.stringify(newCartState))
  }

  const [deliveryInfo, setDeliveryInfo] = useState({} as DeliveryInfoProps)

  function createDeliveryInfo(addressInfo: AddressInfoProps, zivValue: string) {
    // const { zipCode, address } = info
    const { city, neighborhood, state, street, number, other } = addressInfo

    const newDeliveryInfo: DeliveryInfoProps = {
      zipCode: zivValue,
      address: {
        street,
        neighborhood,
        number,
        city,
        state,
        other,
      },
    }
    setDeliveryInfo(newDeliveryInfo)
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
        deliveryInfo,
        createDeliveryInfo,
        finishPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
