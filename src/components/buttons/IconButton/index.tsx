import { ButtonProps } from '../types'
import { IconButtonStyled } from './style'

export function IconButton({ children, background, handleClick }: ButtonProps) {
  return (
    <IconButtonStyled
      disabled={false}
      onClick={() => handleClick()}
      background={background}
    >
      {children}
    </IconButtonStyled>
  )
}
