import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  background?: 'default' | 'yellow' | 'purple'
  quantity?: number
  handleClick: () => void
}
