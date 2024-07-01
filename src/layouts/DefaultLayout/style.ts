import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  /* padding: 32px 160px 160px; */

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
`
