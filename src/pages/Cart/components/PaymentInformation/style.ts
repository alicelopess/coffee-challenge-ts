import styled from 'styled-components'

export const PaymentInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px;
`
export const PaymentInfoHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
`
export const PaymentInfoHeaderTitle = styled.span`
  display: block;
  font-size: 16px;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 2px;
`
export const PaymentInfoHeaderSubtitle = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};
`
export const PaymentOptionsContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`
