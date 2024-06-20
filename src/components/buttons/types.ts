import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  background?: 'default' | 'yellow' | 'purple'
  type?: 'primary' | 'secondary' | 'icon-only'
  quantity?: number
}
