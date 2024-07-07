import {
  BaseGradientBackground,
  SuccessContainer,
  SuccessDeliveryContentWrapper,
  SuccessDeliveryImage,
  SuccessDeliveryInformation,
  SuccessDeliveryInformationIcon,
  SuccessDeliveryInformationText,
  SuccessDeliveryInformations,
  SuccessDescription,
  SuccessTitle,
} from './style'
import cartSuccessImage from '../../../assets/cartSuccessImage.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useCart } from '../../../hooks/useCart'

export function Success() {
  const { cartState } = useCart()
  const { deliveryInformation, paymentOption } = cartState
  const { address } = deliveryInformation!

  return (
    <SuccessContainer>
      <div>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessDescription>
          Agora é só aguardar e logo o café chegará até você
        </SuccessDescription>
      </div>
      <SuccessDeliveryContentWrapper>
        <BaseGradientBackground>
          <SuccessDeliveryInformations>
            <SuccessDeliveryInformation>
              <SuccessDeliveryInformationIcon style={{ background: '#8047F8' }}>
                <MapPin size={16} weight="fill" />
              </SuccessDeliveryInformationIcon>
              <SuccessDeliveryInformationText>
                <span>
                  Entrega em{' '}
                  <strong>
                    {address?.street}, {address?.number}
                  </strong>
                </span>
                {address?.neighborhood} - {address?.city}, {address?.state}
              </SuccessDeliveryInformationText>
            </SuccessDeliveryInformation>
            <SuccessDeliveryInformation>
              <SuccessDeliveryInformationIcon style={{ background: '#DBAC2C' }}>
                <Timer size={16} weight="fill" />
              </SuccessDeliveryInformationIcon>
              <SuccessDeliveryInformationText>
                Previsão de entrega
                <strong>20 min - 30 min </strong>
              </SuccessDeliveryInformationText>
            </SuccessDeliveryInformation>
            <SuccessDeliveryInformation>
              <SuccessDeliveryInformationIcon style={{ background: '#C47F17' }}>
                <CurrencyDollar size={16} />
              </SuccessDeliveryInformationIcon>
              <SuccessDeliveryInformationText>
                Pagamento na entrega
                <strong>{paymentOption?.title}</strong>
              </SuccessDeliveryInformationText>
            </SuccessDeliveryInformation>
          </SuccessDeliveryInformations>
        </BaseGradientBackground>
        <SuccessDeliveryImage src={cartSuccessImage} alt="" />
      </SuccessDeliveryContentWrapper>
    </SuccessContainer>
  )
}
