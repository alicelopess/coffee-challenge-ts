// import { useState } from 'react'
// import { CartItem } from '../contexts/CartContext'
// import { useCart } from '../hooks/useCart'

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
    <h2>Home Page</h2>
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
