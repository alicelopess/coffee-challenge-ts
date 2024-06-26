import styled from 'styled-components'

export const CartCardContainer = styled.div`
  width: 368px;
  height: fit-content;
  padding: 0.5rem 0.25rem;
  border-radius: 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CartCardImg = styled.img`
  width: 64px;
  height: 64px;

  border: 1px solid black;
`
export const CartCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  /* div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
  } */
`
export const CartCardTitle = styled.span`
  display: inline-block;
  margin-bottom: 8px;

  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CartCardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CartCardPrice = styled.span`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`
