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

import { useCart } from '../../../../hooks/useCart'

export function OrderDeliveryForm() {
  const { tempDeliveryInfo, createTempDeliveryInfo } = useCart()
  const { address } = tempDeliveryInfo
  console.log('address:' + JSON.stringify(address))

  // Inputs States
  const [zipValue, setZipValue] = useState('')
  const [streetValue, setStreetValue] = useState<string | undefined>(undefined)
  const [numberValue, setNumberValue] = useState<string | undefined>(undefined)
  const [complementValue, setComplementValue] = useState<string | undefined>(
    undefined,
  )
  const [cityValue, setCityValue] = useState<string | undefined>(undefined)
  const [stateValue, setStateValue] = useState<string | undefined>(undefined)
  const [neighborhoodValue, setNeighborhoodValue] = useState<
    string | undefined
  >(undefined)

  const handleChangeZipValue = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const zipValueInput = event.target.value

    if (zipValueInput.length === 8) {
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${zipValueInput}`,
      )
      const data = await response.json()

      setStreetValue(data.street)
      setCityValue(data.city)
      setStateValue(data.state)
      setNeighborhoodValue(data.neighborhood)

      const newDeliveryInfo = { ...data, other: null, number: null }

      createTempDeliveryInfo(newDeliveryInfo, zipValueInput)
      setZipValue(zipValueInput)
    }

    if (zipValueInput.length === 0) {
      console.log('vazio')

      setStreetValue('')
      setCityValue('')
      setStateValue('')
      setNeighborhoodValue('')
      setComplementValue('')
      setNumberValue('')

      createTempDeliveryInfo(null, null)
      setZipValue(zipValueInput)
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
          type="number"
          maxLength={8}
          placeholder="Cep"
          style={{ gridArea: 'zip' }}
          onChange={handleChangeZipValue}
        />
        <BaseInput
          placeholder="Rua"
          style={{ gridArea: 'street' }}
          // value={address ? address.street : undefined}
          value={streetValue}
          disabled
        />
        <BaseInput
          type="number"
          placeholder="Número"
          style={{ gridArea: 'number' }}
          disabled={!zipValue}
          value={numberValue}
          onChange={(event) => {
            const newNumberValue = event.target.value
            setNumberValue(newNumberValue)
            // setAddressInfo({ ...addressInfo, number: newNumberValue })
            address &&
              createTempDeliveryInfo(
                { ...address, number: newNumberValue },
                zipValue,
              )
          }}
        />
        <BaseInput
          placeholder="Complemento"
          style={{ gridArea: 'other' }}
          disabled={!zipValue}
          value={complementValue}
          onChange={(event) => {
            const newComplementValue = event.target.value
            setComplementValue(newComplementValue)
            // setAddressInfo({ ...addressInfo, other: newComplementValue })
            address &&
              createTempDeliveryInfo(
                {
                  ...address,
                  other: newComplementValue,
                },
                zipValue,
              )
          }}
        />
        <BaseInput
          placeholder="Bairro"
          style={{ gridArea: 'neighborhood' }}
          // value={address ? address.neighborhood : undefined}
          value={neighborhoodValue}
          disabled
        />
        <BaseInput
          placeholder="Cidade"
          style={{ gridArea: 'city' }}
          // value={address ? address.city : undefined}
          value={cityValue}
          disabled
        />
        <BaseInput
          placeholder="UF"
          style={{ gridArea: 'state' }}
          // value={address ? address.state : undefined}
          value={stateValue}
          disabled
        />
      </InputsWrapper>
    </FormContainer>
  )
}
