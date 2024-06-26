import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 80px 160px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
`

export const SuccessTitle = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  width: 100%;
  font-family: 'Baloo 2', sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme['yellow-dark']};
`

export const SuccessDescription = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme['base-subtitle']};
`

export const SuccessDeliveryContentWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
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
`
export const SuccessDeliveryInformation = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-start;
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
