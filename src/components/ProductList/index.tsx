import { CatalogCard } from '../cards/CatalogCard'
import {
  ProductListContainer,
  ProductListItems,
  ProductListTitle,
} from './style'
import { ProductData } from '../../services/dbMock'
// import { ProductProps } from '../cards/CatalogCard/type'

export function ProductList() {
  return (
    <ProductListContainer>
      <ProductListTitle>Nossos cafés</ProductListTitle>
      <ProductListItems>
        {ProductData.map((product, index) => (
          <CatalogCard
            key={index}
            title={product.name}
            description={product.description}
            price={String(product.price)}
            type={product.type}
            url={product.url}
          />
        ))}
      </ProductListItems>
    </ProductListContainer>
  )
}
