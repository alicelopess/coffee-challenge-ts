import styled, { css } from 'styled-components'
import { SelectorProps } from '../types'

export const Selector = styled.div<{
  // background: SelectorProps['background']
  selectionOption: SelectorProps['selectionOption']
  isSelected: SelectorProps['isSelected']
}>`
  width: 178.67px;
  padding: 1rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;

  background: ${(props) => props.theme['base-button']};

  @media screen and (max-width: 1440px) {
    min-width: 178.67px;
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 992px) {
    justify-content: center;
  }

  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        background: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme.purple};
      `
    }
  }}
`
export const SelectorText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme['base-subtitle']};
  text-transform: uppercase;
`
