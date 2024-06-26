import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px 160px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  background: transparent;
`
export const OrderInformationContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const BaseCartTitle = styled.span`
  display: inline-block;
  width: 100%;
  text-align: start;

  font-family: 'Baloo 2', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${(porps) => porps.theme['base-subtitle']};

  margin-bottom: 1rem;
`

export const CartInformationContainer = styled.div`
  /* padding: 40px; */
  padding: 40px 16px;

  display: grid;
  gap: 24px;
  grid-template-rows: auto 1fr auto;
`

export const CartItemsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 498px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  overflow-y: scroll;
`

export const CartItemWrapper = styled.div`
  width: 100%;
  padding: 0 24px 24px;
  /* padding-bottom: 24px; */
  /* margin: 0 8px; */
  border-bottom: 1px solid ${(porps) => porps.theme['base-button']};
`
export const CartPriceInformationsWrapper = styled.div`
  width: 100%;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`

export const CartPriceIndividualInformationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CartBasePriceDescription = styled.span`
  font-size: 14px;
  color: ${(porps) => porps.theme['base-text']};
`
export const CartBasePriceAmount = styled.span`
  font-size: 1rem;
  color: ${(porps) => porps.theme['base-text']};
`
export const CartTotalPriceAmount = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${(porps) => porps.theme['base-subtitle']};
`

export const CartActionsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`
