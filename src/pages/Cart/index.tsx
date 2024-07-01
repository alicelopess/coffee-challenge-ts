// import { NavLink } from 'react-router-dom'
import { useState } from 'react'
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
  const [deliveryPrice, setDeliveryPrice] = useState(0)
  const { cartState, totalCartAmount } = useCart()
  const { cart } = cartState

  const handleFinishPurchase = () => {
    console.log(`Pedido Confirmado!`)
  }

  // const handleUpdateDeliveryPrice = () => {
  //   setDeliveryPrice(3.5)
  // }

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
                      id={item.id}
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
              {/* <CartBasePriceAmount>R$ 29,70</CartBasePriceAmount> */}
            </CartPriceIndividualInformationWrapper>
            {cart.length !== 0 && (
              <CartPriceIndividualInformationWrapper>
                <CartBasePriceDescription>Entrega</CartBasePriceDescription>
                {/* <CartBasePriceAmount>R$ 3,50</CartBasePriceAmount> */}
                <CartBasePriceAmount>R$ {deliveryPrice}</CartBasePriceAmount>
              </CartPriceIndividualInformationWrapper>
            )}
            {/* <CartPriceIndividualInformationWrapper>
              <CartBasePriceDescription>Entrega</CartBasePriceDescription>
              <CartBasePriceAmount>R$ 3,50</CartBasePriceAmount>
            </CartPriceIndividualInformationWrapper> */}
            <CartPriceIndividualInformationWrapper>
              <CartTotalPriceAmount>Total</CartTotalPriceAmount>
              {/* <CartTotalPriceAmount>R$ 33,20</CartTotalPriceAmount> */}
              <CartTotalPriceAmount>
                R$ {totalCartAmount + deliveryPrice}
              </CartTotalPriceAmount>
            </CartPriceIndividualInformationWrapper>
          </CartPriceInformationsWrapper>
          <CartActionsWrapper>
            <PrimaryButton
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

//   <CartItemWrapper>
//   <CartCard
//     title="Expresso Tradicional"
//     price="9.9"
//     url="/coffees/expresso-tradicional.svg"
//   />
// </CartItemWrapper>
// <CartItemWrapper>
//   <CartCard title="Latte" price="19.9" url="/coffees/latte.svg" />
// </CartItemWrapper>
