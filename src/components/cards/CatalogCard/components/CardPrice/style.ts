import styled from 'styled-components'

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
