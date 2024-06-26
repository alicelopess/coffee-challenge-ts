import { ButtonProps } from '../types'
import { SecondaryButtonStyled } from './style'

export function SecondaryButton({ children, background }: ButtonProps) {
  return (
    <SecondaryButtonStyled background={background}>
      {children}
    </SecondaryButtonStyled>
  )
}
