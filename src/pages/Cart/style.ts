import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  /* margin: auto; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  background: transparent;
  /* background-color: red; */

  @media screen and (min-width: 1247px) {
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

  @media screen and (max-width: 1247px) {
    width: 100%;
    flex-direction: row;
    padding-bottom: 2rem;
  }
  @media screen and (max-width: 980px) {
    width: 100%;
    flex-direction: column;
    padding-bottom: 2rem;
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
  width: 448px;
  padding: 40px 16px;

  display: grid;
  gap: 24px;
  grid-template-rows: auto 1fr auto;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;

  @media screen and (max-width: 1247px) {
    width: 100%;
  }
  @media screen and (max-width: 496px) {
    padding: 40px 8px;
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
  padding: 0 24px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;

  span {
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme['base-label']};
  }
  img {
    width: 8rem;
    height: 8rem;
  }
`
export const CartItemWrapper = styled.div`
  width: 100%;
  padding: 0 24px 24px;
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
