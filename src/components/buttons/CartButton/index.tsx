import { ButtonProps } from '../types'
import { CartButtonStyled } from './style'

export function CartButton({
  background,
  quantity,
  children,
  handleClick,
}: ButtonProps) {
  return (
    <CartButtonStyled
      disabled={false}
      background={background}
      quantity={quantity}
      onClick={handleClick}
    >
      {children}
    </CartButtonStyled>
  )
}
