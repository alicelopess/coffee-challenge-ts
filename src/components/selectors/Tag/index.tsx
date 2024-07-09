import { TagContainer } from './style'
import { SelectorProps } from '../types'

export function TagSelector({
  children,
  background = 'yellow',
  handleClick,
}: SelectorProps) {
  return (
    <TagContainer onClick={handleClick} background={background}>
      {children}
    </TagContainer>
  )
}
