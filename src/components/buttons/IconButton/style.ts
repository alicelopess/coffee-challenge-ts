import styled from 'styled-components'
import { BaseButton } from '../PrimaryButton/style'

export const IconButtonStyled = styled(BaseButton)`
  width: fit-content;
  padding: 8px;
  color: ${(props) => props.theme.white};
`
