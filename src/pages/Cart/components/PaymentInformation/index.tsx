import { CurrencyDollar } from '@phosphor-icons/react'
import {
  PaymentInfoContainer,
  PaymentInfoHeader,
  PaymentInfoHeaderSubtitle,
  PaymentInfoHeaderTitle,
  PaymentOptionsContainer,
} from './style'
import { CartSelector } from '../../../../components/selectors/CartSelector'

export function PaymentInformation() {
  return (
    <PaymentInfoContainer>
      <PaymentInfoHeader>
        <CurrencyDollar size={22} color="#8047F8" />
        <div>
          <PaymentInfoHeaderTitle>Pagamento</PaymentInfoHeaderTitle>
          <PaymentInfoHeaderSubtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </PaymentInfoHeaderSubtitle>
        </div>
      </PaymentInfoHeader>
      <PaymentOptionsContainer>
        <CartSelector>Cartão de crédito</CartSelector>
        <CartSelector>Cartão de débito</CartSelector>
        <CartSelector>Dinheiro</CartSelector>
      </PaymentOptionsContainer>
    </PaymentInfoContainer>
  )
}
