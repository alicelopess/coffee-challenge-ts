import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: fit-content;
  padding: 32px 160px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const LogoWrapper = styled.div`
  min-width: 85px;
  height: 40px;

  img {
    max-width: 100%;
  }
`

export const ActionsWrapper = styled.div`
  width: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

export const LocationPickerWrapper = styled.div`
  width: fit-content;
  padding: 8px;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`
