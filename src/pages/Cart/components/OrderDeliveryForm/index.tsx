import { MapPinLine } from '@phosphor-icons/react'
import {
  BaseInput,
  FormContainer,
  FormHeader,
  FormHeaderSubtitle,
  FormHeaderTitle,
  InputsWrapper,
} from './style'
import { useState } from 'react'

import { AddressInfoProps } from '../../../../contexts/CartContext'

// interface AddressInfoProps {
//   street: string
//   number: string | null
//   neighborhood: string
//   city: string
//   state: string
//   other: string | null
// }

export function OrderDeliveryForm() {
  const [addressInfo, setAddressInfo] = useState({} as AddressInfoProps)
  const handleChangeZipValue = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const zipValue = event.target.value
    if (zipValue.length === 8) {
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${zipValue}`,
      )
      const data = await response.json()
      setAddressInfo({ ...data, other: null, number: null })
    }
  }

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
        <BaseInput
          maxLength={8}
          placeholder="Cep"
          style={{ gridArea: 'zip' }}
          onChange={handleChangeZipValue}
        />
        <BaseInput
          placeholder="Rua"
          style={{ gridArea: 'street' }}
          value={addressInfo ? addressInfo.street : undefined}
          onChange={(event) => {
            const newStreetValue = event.target.value
            setAddressInfo({ ...addressInfo, street: newStreetValue })
          }}
        />
        <BaseInput
          placeholder="Número"
          style={{ gridArea: 'number' }}
          onChange={(event) => {
            const newNumberValue = event.target.value
            setAddressInfo({ ...addressInfo, number: newNumberValue })
          }}
        />
        <BaseInput
          placeholder="Complemento"
          style={{ gridArea: 'other' }}
          onChange={(event) => {
            const newComplementValue = event.target.value
            setAddressInfo({ ...addressInfo, other: newComplementValue })
          }}
        />
        <BaseInput
          placeholder="Bairro"
          style={{ gridArea: 'neighborhood' }}
          value={addressInfo ? addressInfo.neighborhood : undefined}
          onChange={(event) => {
            const newNeighborhoodValue = event.target.value
            setAddressInfo({
              ...addressInfo,
              neighborhood: newNeighborhoodValue,
            })
          }}
        />
        <BaseInput
          placeholder="Cidade"
          style={{ gridArea: 'city' }}
          value={addressInfo ? addressInfo.city : undefined}
          onChange={(event) => {
            const newCityValue = event.target.value
            setAddressInfo({ ...addressInfo, city: newCityValue })
          }}
        />
        <BaseInput
          placeholder="UF"
          style={{ gridArea: 'state' }}
          value={addressInfo ? addressInfo.state : undefined}
          onChange={(event) => {
            const newStateValue = event.target.value
            setAddressInfo({ ...addressInfo, state: newStateValue })
          }}
        />
      </InputsWrapper>
    </FormContainer>
  )
}
