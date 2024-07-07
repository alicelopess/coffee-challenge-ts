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

export interface PaymentOptionProps {
  option: string | null
  title: string | null
}

export interface AddressInfoProps {
  street: string
  number?: string
  neighborhood: string
  city: string
  state: string
  other?: string
}

export interface DeliveryInfoProps {
  zipCode: string | null
  address: AddressInfoProps | null
  deliveryPrice: number | null
}

interface CartProps {
  cart: CartItem[]
  isPurchased: boolean
  purchaseAmount?: number
  deliveryInformation?: DeliveryInfoProps
  paymentOption?: PaymentOptionProps
}

interface CartContextType {
  // cart: CartItem[]
  cartState: CartProps
  createCartItem: (product: CartItem) => void
  updateCartQuantity: (id: string, operation: 'increment' | 'decrement') => void
  removeItemFromCart: (id: string) => void
  totalCartAmount: number
  tempDeliveryInfo: DeliveryInfoProps
  createTempDeliveryInfo: (
    addressInfo: AddressInfoProps | null,
    zipValue: string | null,
  ) => void
  paymentOptionValue: PaymentOptionProps
  createPaymentOption: (option: string, optionTitle: string) => void
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

    return {
      cart: [],
      isPurchased: false,
      deliveryInformation: {
        zipCode: null,
        address: null,
        deliveryPrice: null,
      },
      paymentOption: {
        option: null,
        title: null,
      },
    }
  }

  const [cartState, setCartState] = useState<CartProps>(initialState)
  console.log(cartState)

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
    const newCartState = { ...cartState, cart: newCart, isPurchased: false }
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

    const newCartState = { ...cartState, cart: newCart, isPurchased: false }
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

    const newCartState = { ...cartState, cart: newCart, isPurchased: false }
    setCartState(newCartState)
    localStorage.setItem('cart', JSON.stringify(newCartState))
  }

  // Delivery & Payment Contexts

  const [tempDeliveryInfo, setTempDeliveryInfo] = useState(
    {} as DeliveryInfoProps,
  )
  // console.log(deliveryInfo)

  function createTempDeliveryInfo(
    addressInfo: AddressInfoProps | null,
    zipValue: string | null,
  ) {
    // const { zipCode, address } = info
    console.log('entrei')
    if (addressInfo) {
      // console.log('achei info')
      const { city, neighborhood, state, street, number, other } = addressInfo

      const newTempDeliveryInfo: DeliveryInfoProps = {
        zipCode: zipValue,
        address: {
          street,
          neighborhood,
          number,
          city,
          state,
          other,
        },
        deliveryPrice: 3.5,
      }
      setTempDeliveryInfo(newTempDeliveryInfo)
    } else {
      // console.log('vazio demais')
      setTempDeliveryInfo({ address: null, deliveryPrice: 0, zipCode: null })
    }
  }

  const [paymentOptionValue, setPaymentOptionValue] = useState(
    {} as PaymentOptionProps,
  )

  function createPaymentOption(option: string, optionTitle: string) {
    setPaymentOptionValue({ option, title: optionTitle })
  }

  function finishPurchase() {
    console.log('compra finalizada!')

    const { cart } = cartState
    const cartFinishedPurchaseState = [...cart]

    const newCartState: CartProps = {
      cart: [],
      isPurchased: true,
      purchaseAmount: totalCartAmount,
      deliveryInformation: tempDeliveryInfo,
      paymentOption: paymentOptionValue,
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
        tempDeliveryInfo,
        createTempDeliveryInfo,
        paymentOptionValue,
        createPaymentOption,
        finishPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
