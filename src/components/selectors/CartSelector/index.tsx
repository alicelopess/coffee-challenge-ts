import { CreditCard } from '@phosphor-icons/react'
import { SelectorProps } from '../types'
import { Selector, SelectorText } from './style'

export function CartSelector({
  background = 'default',
  children,
  handleClick,
}: SelectorProps) {
  return (
    <Selector onClick={handleClick} background={background}>
      <CreditCard size={16} color="#8047F8" />
      <SelectorText>{children}</SelectorText>
    </Selector>
  )
}
