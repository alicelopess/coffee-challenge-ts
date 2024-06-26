import { MapPinLine } from '@phosphor-icons/react'
import {
  BaseInput,
  FormContainer,
  FormHeader,
  FormHeaderSubtitle,
  FormHeaderTitle,
  InputsWrapper,
} from './style'

export function OrderDeliveryForm() {
  return (
    <FormContainer>
      <FormHeader>
        <MapPinLine size={22} color="#C47F17" />
        <div>
          <FormHeaderTitle>Endereço de Entrega</FormHeaderTitle>
          <FormHeaderSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </FormHeaderSubtitle>
        </div>
      </FormHeader>
      <InputsWrapper>
        <BaseInput placeholder="Cep" style={{ gridArea: 'cep' }} />
        <BaseInput placeholder="Rua" style={{ gridArea: 'street' }} />
        <BaseInput placeholder="Número" style={{ gridArea: 'number' }} />
        <BaseInput placeholder="Complemento" style={{ gridArea: 'other' }} />
        <BaseInput placeholder="Bairro" style={{ gridArea: 'neighborhood' }} />
        <BaseInput placeholder="Cidade" style={{ gridArea: 'city' }} />
        <BaseInput placeholder="Estado" style={{ gridArea: 'state' }} />
      </InputsWrapper>
    </FormContainer>
  )
}
