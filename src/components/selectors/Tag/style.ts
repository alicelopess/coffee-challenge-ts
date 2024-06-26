import styled, { css } from 'styled-components'
import { SelectorProps } from '../types'

export const TagContainer = styled.div<{
  background: SelectorProps['background']
}>`
  width: fit-content;
  height: fit-content;
  border-radius: 100px;
  margin-bottom: 0.5rem;

  padding: 0.25rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 130%;

  ${({ background }) => {
    if (background === 'yellow') {
      return css`
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
      `
    }
    if (background === 'purple') {
      return css`
        background: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple-dark']};
      `
    }
  }}
`
