import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
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
