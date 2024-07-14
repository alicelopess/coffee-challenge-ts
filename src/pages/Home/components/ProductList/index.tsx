import { CatalogCard } from '../../../../components/cards/CatalogCard'
import {
  ProductListContainer,
  ProductListItems,
  ProductListTitle,
} from './style'
import { ProductData } from '../../../../services/dbMock'
import { useEffect, useState } from 'react'

export function ProductList() {
  const [screenWidth, setScreenWidth] = useState<number>(screen.width)
  useEffect(() => {
    const resize = window.addEventListener('resize', ({ target }: any) =>
      setScreenWidth(target.screen.width),
    )
    return resize
  }, [])

  return (
    <ProductListContainer>
      <ProductListTitle>Nossos cafés</ProductListTitle>
      <ProductListItems>
        {ProductData.map((product, index) => (
          <CatalogCard
            key={index}
            id={String(product.id)}
            title={product.name}
            description={product.description}
            price={String(product.price)}
            type={product.type}
            url={product.url}
            cardOrientation={screenWidth <= 1248 ? 'horizontal' : 'vertical'}
            imageSize={screenWidth <= 1248 ? 'image-md' : 'image-lg'}
          />
        ))}
      </ProductListItems>
    </ProductListContainer>
  )
}
