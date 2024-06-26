import {
  BaseGradientBackground,
  SuccessContainer,
  SuccessDeliveryContentWrapper,
  SuccessDeliveryInformation,
  SuccessDeliveryInformationIcon,
  SuccessDeliveryInformations,
  SuccessDescription,
  SuccessTitle,
} from './style'
import cartSuccessImage from '../../../assets/cartSuccessImage.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
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
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                <br /> Farrapos - Porto Alegre, RS
              </span>
            </SuccessDeliveryInformation>
            <SuccessDeliveryInformation>
              <SuccessDeliveryInformationIcon style={{ background: '#DBAC2C' }}>
                <Timer size={16} weight="fill" />
              </SuccessDeliveryInformationIcon>
              <span>
                Previsão de entrega <br />
                <strong>20 min - 30 min </strong>
              </span>
            </SuccessDeliveryInformation>
            <SuccessDeliveryInformation>
              <SuccessDeliveryInformationIcon style={{ background: '#C47F17' }}>
                <CurrencyDollar size={16} />
              </SuccessDeliveryInformationIcon>
              <span>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito </strong>
              </span>
            </SuccessDeliveryInformation>
          </SuccessDeliveryInformations>
        </BaseGradientBackground>
        <img src={cartSuccessImage} alt="" />
      </SuccessDeliveryContentWrapper>
    </SuccessContainer>
  )
}
