import { CreditCard } from '@phosphor-icons/react'
import { SelectorProps } from '../types'
import { Selector, SelectorText } from './style'

export function CartSelector({
  children,
  handleClick,
  selectionOption,
  isSelected,
}: SelectorProps) {
  return (
    <Selector
      selectionOption={selectionOption}
      isSelected={isSelected}
      onClick={handleClick}
    >
      <CreditCard size={16} color="#8047F8" />
      <SelectorText>{children}</SelectorText>
    </Selector>
  )
}
