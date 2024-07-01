import { CurrencyDollar } from '@phosphor-icons/react'
import {
  PaymentInfoContainer,
  PaymentInfoHeader,
  PaymentInfoHeaderSubtitle,
  PaymentInfoHeaderTitle,
  PaymentOptionsContainer,
} from './style'
import { CartSelector } from '../../../../components/selectors/CartSelector'

// interface PaymentInformationProps {
//   paymentOption: undefined | 'credit' | 'debit' | 'money' | 'pix'
// }

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
        <CartSelector handleClick={() => {}}>Cartão de crédito</CartSelector>
        <CartSelector handleClick={() => {}}>Cartão de débito</CartSelector>
        <CartSelector handleClick={() => {}}>Dinheiro</CartSelector>
      </PaymentOptionsContainer>
    </PaymentInfoContainer>
  )
}
