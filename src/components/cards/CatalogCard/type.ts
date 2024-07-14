export interface ProductProps {
  id: string
  title: string
  description: string
  price: string
  url: string
  type: string
}

export interface CatalogCardProps extends ProductProps {
  cardOrientation: 'vertical' | 'horizontal'
  imageSize: 'image-sm' | 'image-md' | 'image-lg'
}
