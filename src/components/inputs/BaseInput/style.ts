import styled from 'styled-components'

export const StyledBaseInput = styled.input`
  outline: none;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  width: 100%;
  height: fit-content;
  padding: 12px;

  font-size: 14px;

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
  &::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputLabel = styled.label`
  position: relative;
`
export const InputLabelText = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);

  font-size: 12px;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`
