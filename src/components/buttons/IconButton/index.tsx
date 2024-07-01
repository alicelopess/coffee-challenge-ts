import { ButtonProps } from '../types'
import { IconButtonStyled } from './style'

export function IconButton({ children, background, handleClick }: ButtonProps) {
  return (
    <IconButtonStyled onClick={() => handleClick()} background={background}>
      {children}
    </IconButtonStyled>
  )
}
