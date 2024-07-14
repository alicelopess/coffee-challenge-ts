import styled, { css } from 'styled-components'
import { CardImageProps } from './types'

export const Wrapper = styled.div<{
  imageSize: CardImageProps['imageSize']
  cardOrientation: CardImageProps['cardOrientation']
}>`
  /* width: 4rem;
  height: 4rem;

  border: 1px solid yellow;

  position: absolute;
  top: 0;
  left: 50%;

  transform: translateX(-50%) translateY(-9.9px); */

  width: 120px;
  height: 120px;
  position: absolute;
  top: 0;

  /* border: 1px solid black; */
  transform: translateY(-20px) translateX(-50%);
  left: 50%;

  ${({ imageSize }) => {
    if (imageSize === 'image-sm') {
      return css`
        width: 64px;
        height: 64px;
      `
    }
    if (imageSize === 'image-md') {
      return css`
        width: 96px;
        height: 96px;
      `
    }
    if (imageSize === 'image-lg') {
      return css`
        width: 120px;
        height: 120px;
      `
    }
  }}

  ${({ cardOrientation }) => {
    if (cardOrientation === 'horizontal') {
      return css`
        position: absolute;
        top: 0;
        left: 0;

        transform: translateX(8px) translateY(-16px);
      `
    }
  }}
`
export const CatalogCardImage = styled.img`
  width: 100%;
`
