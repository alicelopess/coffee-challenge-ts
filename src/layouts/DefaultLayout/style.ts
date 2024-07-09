import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.background};
`
export const LayoutMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 160px;

  @media screen and (max-width: 1392px) {
    padding: 0 128px;
  }

  @media screen and (max-width: 1088px) {
    padding: 0 64px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 32px;
  }
`
