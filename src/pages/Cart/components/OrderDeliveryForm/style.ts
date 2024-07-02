import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px;
`
export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
`
export const FormHeaderTitle = styled.span`
  display: block;
  font-size: 16px;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 2px;
`
export const FormHeaderSubtitle = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};
`

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'zip zip zip zip . . . . . .'
    'street street street street street street street street street street'
    'number number number number other other other other other other'
    'neighborhood neighborhood neighborhood neighborhood city city city city city state';
  gap: 12px;
`

export const BaseInput = styled.input`
  outline: none;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  width: 100%;
  height: fit-content;
  padding: 12px;

  font-size: 14px;

  /* display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px; */

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
  &::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme['base-label']};
  }
`

// export const SendAddressButton = styled.button`
//   grid-area: 'addressButton';

//   width: 100%;
//   height: fit-content;
//   padding: 12px 8px;
//   border: none;
//   border-radius: 6px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 4px;

//   font-family: 'Roboto', sans-serif;
//   font-size: 14px;
//   font-weight: 700;
//   text-transform: uppercase;

//   cursor: pointer;
// `
