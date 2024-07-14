import styled, { css } from 'styled-components'
import { CardInfoProps } from './types'

export const Wrapper = styled.div<{
  // alignOptions: CardInfoProps['alignOptions']
  cardOrientation: CardInfoProps['cardOrientation']
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  ${({ cardOrientation }) => {
    if (cardOrientation === 'horizontal') {
      return css`
        align-items: flex-start;
        gap: 0.25rem;
      `
    }
  }}
`
export const Title = styled.span<{
  // titleOptions: CardInfoProps['titleOptions']
  cardOrientation: CardInfoProps['cardOrientation']
}>`
  /* font-family: 'Baloo 2', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--gray-800); */

  font-size: 20px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};

  ${({ cardOrientation }) => {
    if (cardOrientation === 'horizontal') {
      return css`
        font-size: 1rem;
      `
    }
  }}
`
export const Description = styled.span<{
  // alignOptions: CardInfoProps['alignOptions']
  cardOrientation: CardInfoProps['cardOrientation']
}>`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  text-align: center;

  ${({ cardOrientation }) => {
    if (cardOrientation === 'horizontal') {
      return css`
        text-align: left;
      `
    }
  }}
`
