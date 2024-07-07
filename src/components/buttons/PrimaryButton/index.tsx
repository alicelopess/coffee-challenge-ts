import { BaseButton } from './style'
import { ButtonProps } from '../types'

export function PrimaryButton({
  children,
  background = 'default',
  handleClick,
  isDisabled,
}: ButtonProps) {
  return (
    <BaseButton
      disabled={isDisabled}
      onClick={() => handleClick()}
      background={background}
    >
      {children}
    </BaseButton>
  )
}
