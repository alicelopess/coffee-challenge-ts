import { CatalogCardImage, Wrapper } from './style'
import { CardImageProps } from './types'

export function CardImage({ imageSize, cardOrientation, src }: CardImageProps) {
  return (
    <Wrapper imageSize={imageSize} cardOrientation={cardOrientation}>
      <CatalogCardImage src={src} alt="" />
    </Wrapper>
  )
}
