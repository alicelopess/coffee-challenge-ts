import styled from 'styled-components'

export const ProductListContainer = styled.section`
  /* width: 100%; */
  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* align-items: center; */
  gap: 54px;
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
  /* justify-items: center;
  align-items: center;
  justify-content: center; */
  gap: 40px 32px;
`
