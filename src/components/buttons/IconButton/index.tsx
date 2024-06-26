import { ButtonProps } from '../types'
import { IconButtonStyled } from './style'

export function IconButton({ children, background }: ButtonProps) {
  return <IconButtonStyled background={background}>{children}</IconButtonStyled>
}
