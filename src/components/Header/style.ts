import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: fit-content;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1392px) {
    padding: 2rem 128px;
    /* padding: 0 96px; */
  }

  /* @media screen and (max-width: 1156px) {
    padding: 2rem 128px;
    padding: 2rem 96px;
  } */
  @media screen and (max-width: 1088px) {
    padding: 2rem 64px;
  }
  /* @media screen and (max-width: 1024px) {
    padding: 2rem 64px;
  } */
  @media screen and (max-width: 960px) {
    /* padding: 0 128px; */
    padding: 2rem 32px;
  }
  /* @media screen and (max-width: 752px) {
    padding: 2rem 96px;
  } */
  /* @media screen and (max-width: 650px) {
    padding: 2rem 64px;
  } */
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
