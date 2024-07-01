// import { useState } from 'react'
// import { CartItem } from '../contexts/CartContext'
// import { useCart } from '../hooks/useCart'

import {
  HomeContainer,
  // IntroSectionBackground,
  IntroSectionContent,
  IntroSectionImage,
  IntroSectionMainContent,
  IntroSectionSecondaryContentItem,
  IntroSectionSecondaryContentWrapper,
  IntroSectionWrapper,
} from './style'
import homeIntroImage from '../../assets/homeIntroImage.svg'
// import homeIntroBackground from '../../assets/homeIntroBackground.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { ProductList } from './components/ProductList'

export function Home() {
  // const {
  //   cartState,
  //   createCartItem,
  //   updateCartQuantity,
  //   totalCartAmount,
  //   removeItemFromCart,
  //   finishPurchase,
  // } = useCart()
  // const { cart, isPurchased } = cartState
  // const [finishedPurchaseState, setFinishedPurchaseState] = useState<
  //   CartItem[]
  // >([])

  // const handleFinishPurchase = () => {
  //   const cartFinishedPurchaseState = finishPurchase()
  //   setFinishedPurchaseState(cartFinishedPurchaseState)
  // }

  // const product = {
  //   title: 'Primeiro Produto',
  //   price: 12.0,
  // }
  return (
    <HomeContainer>
      <IntroSectionWrapper>
        <IntroSectionContent>
          <IntroSectionMainContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o <strong>Coffee Delivery</strong> você recebe seu café onde
              estiver, a qualquer hora!
            </span>
          </IntroSectionMainContent>
          <IntroSectionSecondaryContentWrapper>
            <IntroSectionSecondaryContentItem>
              <div style={{ background: '#C47F17' }}>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </IntroSectionSecondaryContentItem>
            <IntroSectionSecondaryContentItem>
              <div style={{ background: '#574F4D' }}>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </IntroSectionSecondaryContentItem>
            <IntroSectionSecondaryContentItem>
              <div style={{ background: '#DBAC2C' }}>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </IntroSectionSecondaryContentItem>
            <IntroSectionSecondaryContentItem>
              <div style={{ background: '#8047F8' }}>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </IntroSectionSecondaryContentItem>
          </IntroSectionSecondaryContentWrapper>
        </IntroSectionContent>
        <IntroSectionImage src={homeIntroImage} alt="" />
        {/* <IntroSectionBackground src={homeIntroBackground} /> */}
      </IntroSectionWrapper>
      <ProductList />
    </HomeContainer>
    // <>
    //   <h1>Hello World!</h1>

    //   <button
    //     onClick={() => {
    //       createCartItem(product)
    //     }}
    //   >
    //     Add Product To Cart
    //   </button>
    //   <button onClick={() => console.log(cartState)}>Display Cart State</button>
    //   <button onClick={() => console.log(cart)}>Display Cart Items</button>

    //   {cart.map((item) => {
    //     return (
    //       <div key={item.id} style={{ border: '1px solid black' }}>
    //         <h1>{item.title}</h1>
    //         <h2>{item.quantity}</h2>
    //         <p>{item.price}</p>
    //         <button
    //           onClick={() => {
    //             updateCartQuantity(item, 'increment')
    //           }}
    //         >
    //           Aumentar Quantidade
    //         </button>
    //         <button
    //           onClick={() => {
    //             updateCartQuantity(item, 'decrement')
    //           }}
    //         >
    //           Diminuir Quantidade
    //         </button>
    //         <button
    //           onClick={() => {
    //             removeItemFromCart(item)
    //           }}
    //         >
    //           Remover do Carrinho
    //         </button>
    //       </div>
    //     )
    //   })}

    //   <h3>Total: {totalCartAmount}</h3>
    //   {cart.length > 0 ? (
    //     <button onClick={handleFinishPurchase}>Finish Purchase</button>
    //   ) : (
    //     <p> Adicione itens ao seu carrinho! </p>
    //   )}

    //   {isPurchased ? (
    //     <div style={{ border: '1px solid black' }}>
    //       <h1>Itens comprados</h1>
    //       {finishedPurchaseState.map((item) => {
    //         return (
    //           <div key={item.id} style={{ border: '1px solid red' }}>
    //             <h1>{item.title}</h1>
    //             <h2>{item.quantity}</h2>
    //             <p>{item.price}</p>
    //           </div>
    //         )
    //       })}
    //     </div>
    //   ) : (
    //     <p> Finalize sua compra! </p>
    //   )}
    // </>
  )
}
