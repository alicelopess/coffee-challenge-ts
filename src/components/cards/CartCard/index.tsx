// import { ProductCardProps } from '../types'
import { Trash } from '@phosphor-icons/react'
import { SecondaryButton } from '../../buttons/SecondaryButton'
import {
  CartCardActions,
  CartCardContainer,
  CartCardImg,
  CartCardInfo,
  CartCardPrice,
  CartCardTitle,
} from './style'
import { CounterInput } from '../../inputs/CounterInput'
import { ProductInCartProps } from './type'
import { useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import { formatPrice } from '../../../helpers/formatPrice'

export function CartCard({
  id,
  title,
  url,
  price,
  quantity = 1,
}: ProductInCartProps) {
  const { updateCartQuantity, removeItemFromCart } = useCart()

  const [counterInputValue, setCounterInputValue] = useState(quantity)
  const handleIncrementCounterValue = () => {
    setCounterInputValue(counterInputValue + 1)
    updateCartQuantity(id, 'increment')
    console.log(`Operação de Quantidade!`)
  }
  const handleDecrementCounterValue = () => {
    setCounterInputValue(counterInputValue - 1)
    updateCartQuantity(id, 'decrement')
    console.log(`Operação de Quantidade!`)
  }
  const handleManualInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newInputValue = parseInt(event.target.value)
    console.log(newInputValue)
    // setCounterInputValue(newInputValue)
    // handleUpdateCartItemQuantity()
  }

  return (
    <CartCardContainer>
      <CartCardInfo>
        <CartCardImg src={url} alt="" />
        <div>
          <CartCardTitle>{title}</CartCardTitle>
          <CartCardActions>
            <CounterInput
              inputValue={counterInputValue}
              handleIncrement={handleIncrementCounterValue}
              handleDecrement={handleDecrementCounterValue}
              handleManualChange={handleManualInputValueChange}
            />
            <SecondaryButton
              handleClick={() => removeItemFromCart(id)}
              background="default"
            >
              <Trash size={16} color="#8047F8" />
              Remover
            </SecondaryButton>
          </CartCardActions>
        </div>
      </CartCardInfo>
      <CartCardPrice>R$ {formatPrice(parseFloat(price))}</CartCardPrice>
    </CartCardContainer>
  )
}
