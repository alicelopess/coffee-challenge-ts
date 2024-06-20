import { ButtonProps } from '../types'
import { SecondaryButtonStyled } from './style'

export function SecondaryButton({
  children,
  background = 'default',
}: ButtonProps) {
  return (
    <SecondaryButtonStyled background={background}>
      {children}
    </SecondaryButtonStyled>
  )
}
