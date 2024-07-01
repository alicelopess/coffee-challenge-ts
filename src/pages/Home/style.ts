import styled from 'styled-components'

export const HomeContainer = styled.div`
  /* width: 100%; */
  /* padding: 0 10rem; */
  /* position: relative; */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 1440px) {
    margin: auto;
  }
`

export const IntroSectionWrapper = styled.section`
  /* width: 100%; */
  height: 544px;
  /* border: 1px solid black; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  gap: 3.5rem; //56px

  /* @media screen and (min-width: 1440px) {
    margin: auto;
  } */
`

export const IntroSectionBackground = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 544px;
  left: 0;
  right: 0;
`

export const IntroSectionContent = styled.div`
  /* width: 52.5%;  */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.125rem; //66px

  /* border: 1px solid red; */

  /* @media only screen and (max-width: 1418px) {
    width: 100%;
  } */
`

export const IntroSectionMainContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem; //48px
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem; //20px
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  /* @media only screen and (max-width: 1418px) {
    max-width: 90%;
  }
  @media only screen and (max-width: 1130px) {
    max-width: 100%;
  } */
`
export const IntroSectionImage = styled.img`
  /* @media only screen and (max-width: 1418px) {
    display: none;
  } */
`

export const IntroSectionSecondaryContentWrapper = styled.div`
  width: 96%;
  /* max-width: 95%; */
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  gap: 1.25rem 2.5rem;

  /* @media only screen and (max-width: 1418px) {
    max-width: 70%;
  }
  @media only screen and (max-width: 1130px) {
    max-width: 100%;
  } */
`

export const IntroSectionSecondaryContentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  min-width: 231px;
  max-width: 294px;

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;

    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.background};
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`
