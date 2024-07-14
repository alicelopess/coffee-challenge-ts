import styled, { css } from 'styled-components'
import { CatalogCardProps } from './type'

export const CatalogCardContainer = styled.div<{
  cardOrientation: CatalogCardProps['cardOrientation']
}>`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;
  /* border: 1px solid red; */

  border: 1px solid var ${(props) => props.theme['base-button']};
  border-radius: 6px 36px 6px 36px;
  box-shadow: 0 2px 8px 0 rgb(0, 0, 0 / 4%);

  padding: 112px 20px 20px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 33px;

  /* background: transparent; */
  background: ${(props) => props.theme['base-card']};

  ${({ cardOrientation }) => {
    if (cardOrientation === 'horizontal') {
      return css`
        height: 140px;
        width: fit-content;
        padding: 1rem 1rem 1rem 7.25rem;

        align-items: flex-start;
        gap: 0.5rem;
      `
    }
  }}
`
export const CatalogCardImg = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 0;

  /* border: 1px solid black; */
  transform: translateY(-20px) translateX(-50%);
  left: 50%;
`
export const CatalogCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`
export const CatalogCardTitle = styled.span`
  font-size: 20px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CatalogCardDescription = styled.span`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`

export const CatalogCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CatalogCardPriceCurrency = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};
`

export const CatalogCardPriceAmount = styled.span`
  margin-left: 0.25rem;
  margin-right: 15px;
  font-size: 24px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
`
