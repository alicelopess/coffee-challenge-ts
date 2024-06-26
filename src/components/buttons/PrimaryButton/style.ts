import styled, { css } from 'styled-components'
import { ButtonProps } from '../types'

export const BaseButton = styled.button<{
  background: ButtonProps['background']
}>`
  width: 100%;
  height: fit-content;
  padding: 12px 8px;
  border: none;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;

  ${({ background }) => {
    if (background === 'default') {
      return css`
        background: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-text']};

        &:hover,
        &:focus {
          background: ${(props) => props.theme['base-hover']};
          color: ${(props) => props.theme['base-subtitle']};
        }
      `
    }

    if (background === 'purple') {
      return css`
        background: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme.white};

        &:hover,
        &:focus {
          color: ${(props) => props.theme.white};
          background: ${(props) => props.theme.purple};
        }
      `
    }
    if (background === 'yellow') {
      return css`
        background: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.white};

        &:hover,
        &:focus {
          color: ${(props) => props.theme.white};
          background: ${(props) => props.theme['yellow-dark']};
        }
      `
    }
  }}
`
