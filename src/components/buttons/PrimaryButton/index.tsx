import { BaseButton } from './style'
import { ButtonProps } from '../types'

export function PrimaryButton({
  children,
  background = 'default',
  handleClick,
}: ButtonProps) {
  return (
    <BaseButton onClick={() => handleClick()} background={background}>
      {children}
    </BaseButton>
  )
}
