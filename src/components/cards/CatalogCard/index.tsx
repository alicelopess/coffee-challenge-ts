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

export function CatalogCard({ ...props }: ProductProps) {
  return (
    <CatalogCardContainer>
      <CatalogCardImg src="" alt="" />
      <CatalogCardInfo>
        <TagSelector>{props.type}</TagSelector>
        <CatalogCardTitle>{props.title}</CatalogCardTitle>
        <CatalogCardDescription>{props.description}</CatalogCardDescription>
      </CatalogCardInfo>
      <CatalogCardActions>
        <div>
          <CatalogCardPriceCurrency>R$</CatalogCardPriceCurrency>
          <CatalogCardPriceAmount>{props.price}</CatalogCardPriceAmount>
        </div>
        <CounterInput />
        <IconButton background="purple">
          <ShoppingCartSimple size={22} weight="fill" />
        </IconButton>
      </CatalogCardActions>
    </CatalogCardContainer>
  )
}
