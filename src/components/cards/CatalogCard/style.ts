import styled from 'styled-components'

export const CatalogCardContainer = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid red;
  padding: 112px 20px 20px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 33px;

  background: transparent;
`
export const CatalogCardImg = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 0;

  border: 1px solid black;
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
