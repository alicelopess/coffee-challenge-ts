import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  /* margin: auto; */

  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: flex-start;
  /* justify-content: space-between; */
  gap: 2rem;

  background: transparent;

  @media screen and (min-width: 1440px) {
    width: fit-content;
    margin: auto;
    flex-direction: row;
    align-items: flex-start;
  }
`
export const OrderInformationContainer = styled.div`
  width: 640px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: 1440px) {
    width: 100%;
    flex-direction: row;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
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
  width: 448px;
  padding: 40px 16px;

  display: grid;
  gap: 24px;
  grid-template-rows: auto 1fr auto;

  @media screen and (max-width: 1440px) {
    width: 100%;
    /* grid-template-rows: auto auto;
    grid-template-columns: auto auto; */
  }
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
export const CartEmptyStateWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  overflow: hidden;

  span {
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-family: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }
  img {
    width: 2rem;
    height: 2rem;
  }
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
