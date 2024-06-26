import { TagContainer } from './style'
import { SelectorProps } from '../types'

export function TagSelector({
  children,
  background = 'yellow',
}: SelectorProps) {
  return <TagContainer background={background}>{children}</TagContainer>
}
