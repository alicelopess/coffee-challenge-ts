import styled from 'styled-components'

export const ProductListContainer = styled.section`
  /* width: 100%; */
  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* align-items: center; */
  gap: 54px;

  /* background-color: yellow; */

  @media screen and (max-width: 1392px) {
    align-items: center;
  }
`
export const ProductListTitle = styled.span`
  /* display: inline-block;
  width: 100%;
  text-align: start; */

  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ProductListItems = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, auto);
  /* grid-template-columns: repeat(4, 1fr); */
  /* justify-items: center;
  align-items: center;
  justify-content: center; */
  gap: 40px 32px;

  /* background-color: blueviolet; */

  @media screen and (max-width: 1248px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 856px) {
    grid-template-columns: repeat(1, auto);
  }

  /* @media screen and (max-width: 1328px) {
    grid-template-columns: repeat(3, auto);
    gap: 40px 32px;
    gap: 40px 16px;
  } */
  /* @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, auto);
  } */
`
