import { ButtonProps } from '../types'
import { SecondaryButtonStyled } from './style'

export function SecondaryButton({
  children,
  background,
  handleClick,
}: ButtonProps) {
  return (
    <SecondaryButtonStyled
      disabled={false}
      onClick={() => handleClick()}
      background={background}
    >
      {children}
    </SecondaryButtonStyled>
  )
}
