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

export function CartCard() {
  return (
    <CartCardContainer>
      <CartCardInfo>
        <CartCardImg src="" alt="" />
        <div>
          <CartCardTitle>Expresso Tradicional</CartCardTitle>
          <CartCardActions>
            <CounterInput />
            <SecondaryButton background="default">
              <Trash size={16} color="#8047F8" />
              Remover
            </SecondaryButton>
          </CartCardActions>
        </div>
      </CartCardInfo>
      <CartCardPrice>R$ 9,90</CartCardPrice>
    </CartCardContainer>
  )
}
