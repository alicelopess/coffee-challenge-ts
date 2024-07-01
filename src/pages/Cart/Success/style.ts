import styled from 'styled-components'

export const SuccessContainer = styled.div`
  /* width: 100%; */
  /* margin: auto; */
  height: 100vh;
  padding-top: 5rem; //80px
  /* padding: 80px 160px; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.75rem; //28px

  @media screen and (min-width: 1440px) {
    margin: auto;
  }
`

export const SuccessTitle = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  width: 100%;

  font-family: 'Baloo 2', sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-dark']};

  @media screen and (max-width: 1440px) {
    text-align: center;
  }
`

export const SuccessDescription = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  color: ${(props) => props.theme['base-subtitle']};
  @media screen and (max-width: 1440px) {
    text-align: center;
  }
`

export const SuccessDeliveryContentWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* gap: 5rem; //80px */
  gap: 6.375rem; //102px
  /* flex-wrap: wrap; */

  @media screen and (min-width: 1440px) {
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    gap: 6.375rem; //102px
    /* flex-wrap: wrap; */
  }
`

export const SuccessDeliveryImage = styled.img`
  @media screen and (max-width: 1440px) {
    width: 452px;
    height: 253px;
  }
  @media screen and (max-width: 1400px) {
    display: none;
  }
`

export const BaseGradientBackground = styled.div`
  width: fit-content;
  height: fit-content;
  background: linear-gradient(
    135deg,
    rgba(219, 172, 44, 1) 0%,
    rgba(128, 71, 248, 1) 100%
  );
  border-radius: 6px 36px 6px 36px;
  padding: 1px;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`

export const SuccessDeliveryInformations = styled.div`
  width: 526px;
  height: fit-content;
  padding: 40px;
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  background: ${(props) => props.theme.background};

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`
export const SuccessDeliveryInformation = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`
export const SuccessDeliveryInformationIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.purple};
  border-radius: 1000px;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${(props) => props.theme.background};
`

export const SuccessDeliveryInformationText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: normal;
`
