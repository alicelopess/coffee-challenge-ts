import { ButtonProps } from '../types'
import { IconButtonStyled } from './style'

export function IconButton({ children, background = 'default' }: ButtonProps) {
  return <IconButtonStyled background={background}>{children}</IconButtonStyled>
}
