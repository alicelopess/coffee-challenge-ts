import { ButtonProps } from '../types'
import { SecondaryButtonStyled } from './style'

export function SecondaryButton({
  children,
  background,
  handleClick,
}: ButtonProps) {
  return (
    <SecondaryButtonStyled
      onClick={() => handleClick()}
      background={background}
    >
      {children}
    </SecondaryButtonStyled>
  )
}
