import { ButtonProps } from '../types'
import { CartButtonStyled } from './style'

export function CartButton({ background, quantity, children }: ButtonProps) {
  return (
    <CartButtonStyled background={background} quantity={quantity}>
      {children}
    </CartButtonStyled>
  )
}
