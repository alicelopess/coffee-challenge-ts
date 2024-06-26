import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { CartCard } from '../../components/cards/CartCard'
import { OrderDeliveryForm } from './components/OrderDeliveryForm'
import { PaymentInformation } from './components/PaymentInformation'
import {
  BaseCartTitle,
  CartActionsWrapper,
  CartBasePriceAmount,
  CartBasePriceDescription,
  CartContainer,
  CartInformationContainer,
  CartItemWrapper,
  CartItemsWrapper,
  CartPriceIndividualInformationWrapper,
  CartPriceInformationsWrapper,
  CartTotalPriceAmount,
  OrderInformationContainer,
} from './style'

export function Cart() {
  return (
    <CartContainer>
      <div>
        <BaseCartTitle>Complete seu pedido</BaseCartTitle>
        <OrderInformationContainer>
          <OrderDeliveryForm />
          <PaymentInformation />
        </OrderInformationContainer>
      </div>
      <div>
        <BaseCartTitle>Cafés selecionados</BaseCartTitle>
        <CartInformationContainer>
          <CartItemsWrapper>
            <CartItemWrapper>
              <CartCard />
            </CartItemWrapper>
            <CartItemWrapper>
              <CartCard />
            </CartItemWrapper>
          </CartItemsWrapper>
          <CartPriceInformationsWrapper>
            <CartPriceIndividualInformationWrapper>
              <CartBasePriceDescription>
                Total de Itens
              </CartBasePriceDescription>
              <CartBasePriceAmount>R$ 29,70</CartBasePriceAmount>
            </CartPriceIndividualInformationWrapper>
            <CartPriceIndividualInformationWrapper>
              <CartBasePriceDescription>Entrega</CartBasePriceDescription>
              <CartBasePriceAmount>R$ 3,50</CartBasePriceAmount>
            </CartPriceIndividualInformationWrapper>
            <CartPriceIndividualInformationWrapper>
              <CartTotalPriceAmount>Total</CartTotalPriceAmount>
              <CartTotalPriceAmount>R$ 33,20</CartTotalPriceAmount>
            </CartPriceIndividualInformationWrapper>
          </CartPriceInformationsWrapper>
          <CartActionsWrapper>
            <PrimaryButton background="yellow">Confirmar Pedido</PrimaryButton>
          </CartActionsWrapper>
        </CartInformationContainer>
      </div>
    </CartContainer>
  )
}
