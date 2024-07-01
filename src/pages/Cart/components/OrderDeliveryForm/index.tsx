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

interface cepInfoProps {
  street: string
  number: string | null
  neighborhood: string
  city: string
  state: string
  other: string | null
}

export function OrderDeliveryForm() {
  const [zipInfo, setZipInfo] = useState({} as cepInfoProps)
  const handleChangeZipValue = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const zipValue = event.target.value
    if (zipValue.length === 8) {
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${zipValue}`,
      )
      const data = await response.json()
      setZipInfo({ ...data, other: null, number: null })
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
          value={zipInfo ? zipInfo.street : undefined}
          onChange={(event) => {
            const newStreetValue = event.target.value
            setZipInfo({ ...zipInfo, street: newStreetValue })
          }}
        />
        <BaseInput
          placeholder="Número"
          style={{ gridArea: 'number' }}
          onChange={(event) => {
            const newNumberValue = event.target.value
            setZipInfo({ ...zipInfo, number: newNumberValue })
          }}
        />
        <BaseInput
          placeholder="Complemento"
          style={{ gridArea: 'other' }}
          onChange={(event) => {
            const newComplementValue = event.target.value
            setZipInfo({ ...zipInfo, other: newComplementValue })
          }}
        />
        <BaseInput
          placeholder="Bairro"
          style={{ gridArea: 'neighborhood' }}
          value={zipInfo ? zipInfo.neighborhood : undefined}
          onChange={(event) => {
            const newNeighborhoodValue = event.target.value
            setZipInfo({ ...zipInfo, neighborhood: newNeighborhoodValue })
          }}
        />
        <BaseInput
          placeholder="Cidade"
          style={{ gridArea: 'city' }}
          value={zipInfo ? zipInfo.city : undefined}
          onChange={(event) => {
            const newCityValue = event.target.value
            setZipInfo({ ...zipInfo, city: newCityValue })
          }}
        />
        <BaseInput
          placeholder="Estado"
          style={{ gridArea: 'state' }}
          value={zipInfo ? zipInfo.state : undefined}
          onChange={(event) => {
            const newStateValue = event.target.value
            setZipInfo({ ...zipInfo, state: newStateValue })
          }}
        />
      </InputsWrapper>
    </FormContainer>
  )
}
