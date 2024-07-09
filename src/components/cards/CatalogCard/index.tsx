import { ShoppingCartSimple } from '@phosphor-icons/react'
import { IconButton } from '../../buttons/IconButton'
import { TagSelector } from '../../selectors/Tag'
import {
  CatalogCardActions,
  CatalogCardContainer,
  CatalogCardDescription,
  CatalogCardImg,
  CatalogCardInfo,
  CatalogCardPriceAmount,
  CatalogCardPriceCurrency,
  CatalogCardTitle,
} from './style'
import { CounterInput } from '../../inputs/CounterInput'
import { ProductProps } from './type'
import { useState } from 'react'
import { CartItem } from '../../../contexts/CartContext'
import { useCart } from '../../../hooks/useCart'
import { formatPrice } from '../../../helpers/formatPrice'

export function CatalogCard({ ...props }: ProductProps) {
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
    <CatalogCardContainer>
      <CatalogCardImg src={props.url} alt="" />
      <CatalogCardInfo>
        <TagSelector handleClick={() => {}}>{props.type}</TagSelector>
        <CatalogCardTitle>{props.title}</CatalogCardTitle>
        <CatalogCardDescription>{props.description}</CatalogCardDescription>
      </CatalogCardInfo>
      <CatalogCardActions>
        <div>
          <CatalogCardPriceCurrency>R$</CatalogCardPriceCurrency>
          <CatalogCardPriceAmount>
            {formatPrice(parseFloat(props.price))}
          </CatalogCardPriceAmount>
        </div>
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
