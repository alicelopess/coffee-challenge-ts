import { ShoppingCartSimple } from '@phosphor-icons/react'
import { IconButton } from '../../buttons/IconButton'
import { CatalogCardActions, CatalogCardContainer } from './style'
import { CounterInput } from '../../inputs/CounterInput'
import { CatalogCardProps } from './type'
import { useState } from 'react'
import { CartItem } from '../../../contexts/CartContext'
import { useCart } from '../../../hooks/useCart'
import { CardImage } from './components/CardImage'
import { CardInfo } from './components/CardInfo'
import { CardPrice } from './components/CardPrice'

export function CatalogCardVertical({
  cardOrientation,
  imageSize,
  ...props
}: CatalogCardProps) {
  const { createCartItem } = useCart()

  const [counterInputValue, setCounterInputValue] = useState(1)
  const handleIncrementCounterValue = () =>
    setCounterInputValue(counterInputValue + 1)
  const handleDecrementCounterValue = () =>
    setCounterInputValue(counterInputValue - 1)

  const handleManualInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newInputValue = parseInt(event.target.value)
    console.log(newInputValue)
    setCounterInputValue(newInputValue)
  }

  const handleClickOnCartButton = () => {
    const newCartItem: CartItem = {
      productId: props.id,
      title: props.title,
      price: parseFloat(props.price),
      quantity: counterInputValue,
      // amount: parseFloat(props.price) * counterInputValue,
      url: props.url,
    }
    // console.log(`Adicionar ao Carrinho! ${JSON.stringify(newCartItem)}`)

    createCartItem(newCartItem)
  }

  return (
    <CatalogCardContainer cardOrientation={cardOrientation}>
      <CardImage
        imageSize={imageSize}
        cardOrientation={cardOrientation}
        src={props.url}
      />

      <CardInfo
        description={props.description}
        title={props.title}
        productType={props.type}
        cardOrientation={cardOrientation}
      />

      <CatalogCardActions>
        <CardPrice price={props.price} />
        <CounterInput
          inputValue={counterInputValue}
          handleIncrement={handleIncrementCounterValue}
          handleDecrement={handleDecrementCounterValue}
          handleManualChange={handleManualInputValueChange}
        />
        <IconButton handleClick={handleClickOnCartButton} background="purple">
          <ShoppingCartSimple size={22} weight="fill" />
        </IconButton>
      </CatalogCardActions>
    </CatalogCardContainer>
  )
}
