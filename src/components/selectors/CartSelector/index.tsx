import { SelectorProps } from '../types'
import { Selector, SelectorText } from './style'

export function CartSelector({
  children,
  selectorIcon,
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
      {selectorIcon}
      <SelectorText>{children}</SelectorText>
    </Selector>
  )
}
