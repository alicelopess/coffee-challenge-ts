import { formatPrice } from '../../../../../helpers/formatPrice'
import { CatalogCardPriceAmount, CatalogCardPriceCurrency } from './style'

interface CardPriceProps {
  price: string
}

export function CardPrice({ price }: CardPriceProps) {
  return (
    <>
      <CatalogCardPriceCurrency>R$</CatalogCardPriceCurrency>
      <CatalogCardPriceAmount>
        {formatPrice(parseFloat(price))}
      </CatalogCardPriceAmount>
    </>
  )
}
