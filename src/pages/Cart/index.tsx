import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { CartCard } from '../../components/cards/CartCard'
import { useCart } from '../../hooks/useCart'
import { OrderDeliveryForm } from './components/OrderDeliveryForm'
import { PaymentInformation } from './components/PaymentInformation'
import {
  BaseCartTitle,
  CartActionsWrapper,
  CartBasePriceAmount,
  CartBasePriceDescription,
  CartContainer,
  CartEmptyStateWrapper,
  CartInformationContainer,
  CartItemWrapper,
  CartItemsWrapper,
  CartPriceIndividualInformationWrapper,
  CartPriceInformationsWrapper,
  CartTotalPriceAmount,
  OrderInformationContainer,
} from './style'

export function Cart() {
  const {
    cartState,
    totalCartAmount,
    tempDeliveryInfo,
    finishPurchase,
    paymentOptionValue,
  } = useCart()

  const navigate = useNavigate()

  const { deliveryPrice, zipCode } = tempDeliveryInfo
  const { option: paymentOption } = paymentOptionValue
  const { cart } = cartState

  function navigateToCartSuccess() {
    navigate('/cart/success')
  }

  const handleFinishPurchase = () => {
    console.log(`Pedido Confirmado!`)
    finishPurchase()
    navigateToCartSuccess()
  }
  console.log(cart.length === 0, !zipCode, !paymentOption)

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
            {cart.length === 0 ? (
              <CartEmptyStateWrapper>
                <span>Você ainda não tem cafés selecionados!</span>
              </CartEmptyStateWrapper>
            ) : (
              cart.map((item) => {
                return (
                  <CartItemWrapper key={item.id}>
                    <CartCard
                      id={String(item.id)}
                      title={item.title}
                      price={String(item.price)}
                      url={item.url}
                      quantity={item.quantity}
                    />
                  </CartItemWrapper>
                )
              })
            )}
          </CartItemsWrapper>
          <CartPriceInformationsWrapper>
            <CartPriceIndividualInformationWrapper>
              <CartBasePriceDescription>
                Total de Itens
              </CartBasePriceDescription>
              <CartBasePriceAmount>R$ {totalCartAmount}</CartBasePriceAmount>
            </CartPriceIndividualInformationWrapper>
            <CartPriceIndividualInformationWrapper>
              <CartBasePriceDescription>Entrega</CartBasePriceDescription>
              <CartBasePriceAmount>R$ {deliveryPrice || 0}</CartBasePriceAmount>
            </CartPriceIndividualInformationWrapper>
            <CartPriceIndividualInformationWrapper>
              <CartTotalPriceAmount>Total</CartTotalPriceAmount>
              <CartTotalPriceAmount>
                R$ {totalCartAmount + (deliveryPrice || 0)}
              </CartTotalPriceAmount>
            </CartPriceIndividualInformationWrapper>
          </CartPriceInformationsWrapper>
          <CartActionsWrapper>
            <PrimaryButton
              isDisabled={cart.length === 0 || !zipCode || !paymentOption}
              handleClick={handleFinishPurchase}
              background="yellow"
            >
              Confirmar Pedido
            </PrimaryButton>
          </CartActionsWrapper>
        </CartInformationContainer>
      </div>
    </CartContainer>
  )
}
