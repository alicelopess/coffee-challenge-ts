import styled, { css } from 'styled-components'
import { BaseButton } from '../PrimaryButton/style'
import { ButtonProps } from '../types'

export const CartButtonStyled = styled(BaseButton)<{
  quantity: ButtonProps['quantity']
}>`
  width: fit-content;
  padding: 8px;
  background: ${(props) => props.theme['yellow-light']};
  position: relative;
  color: ${(props) => props.theme['yellow-dark']};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};
  }

  ${({ quantity }) => {
    if (quantity) {
      return css`
        &::after {
          content: '${quantity}';

          width: 20px;
          height: 20px;
          background: ${(props) => props.theme['yellow-dark']};

          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;

          position: absolute;
          top: 0;
          right: 0;
          transform: translateX(50%) translateY(-50%);

          color: ${(props) => props.theme.white};
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 700;
        }
      `
    }
  }}
`
