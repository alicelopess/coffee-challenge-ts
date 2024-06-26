import styled from 'styled-components'

export const CounterContainer = styled.div`
  width: fit-content;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};

  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    color: ${(props) => props.theme['base-title']};

    max-width: 20px;
    height: fit-content;
    border: none;
    outline: none;
    background: transparent;
    text-align: center;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
export const CounterButton = styled.button`
  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.purple};

  cursor: pointer;

  &:focus {
    color: ${(props) => props.theme['purple-dark']};
  }
`
