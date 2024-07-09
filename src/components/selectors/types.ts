import { ReactNode } from 'react'

export interface SelectorProps {
  children: ReactNode
  background?: 'default' | 'yellow' | 'purple'
  border?: 'default'
  handleClick: () => void
  selectionOption?: string
  isSelected?: boolean
  selectorIcon?: ReactNode
}
