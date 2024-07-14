import { TagSelector } from '../../../../selectors/Tag'
import { Description, Title, Wrapper } from './style'
import { CardInfoProps } from './types'

export function CardInfo({
  title,
  description,
  // titleOptions,
  // alignOptions,
  productType,
  cardOrientation,
}: CardInfoProps) {
  return (
    <Wrapper cardOrientation={cardOrientation}>
      {cardOrientation === 'vertical' && (
        <TagSelector handleClick={() => {}}>{productType}</TagSelector>
      )}
      <Title cardOrientation={cardOrientation}>{title}</Title>
      <Description cardOrientation={cardOrientation}>{description}</Description>
    </Wrapper>
  )
}
