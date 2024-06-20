import { BaseButton } from './style'
import { ButtonProps } from '../types'

export function PrimaryButton({
  children,
  background = 'default',
}: ButtonProps) {
  return <BaseButton background={background}>{children}</BaseButton>
}
