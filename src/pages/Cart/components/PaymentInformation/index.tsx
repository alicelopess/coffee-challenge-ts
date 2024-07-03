import { CurrencyDollar } from '@phosphor-icons/react'
import {
  PaymentInfoContainer,
  PaymentInfoHeader,
  PaymentInfoHeaderSubtitle,
  PaymentInfoHeaderTitle,
  PaymentOptionsContainer,
} from './style'
import { CartSelector } from '../../../../components/selectors/CartSelector'
import { useCart } from '../../../../hooks/useCart'

const paymentOptions = [
  {
    option: 'credit',
    title: 'Cartão de Crédito',
    icon: 'some',
  },
  {
    option: 'debit',
    title: 'Cartão de Débito',
    icon: 'some',
  },
  {
    option: 'cash',
    title: 'Dinheiro',
    icon: 'some',
  },
  // {
  //   option: 'pix',
  //   title: 'Pix',
  //   icon: 'some',
  // },
]

// interface PaymentInformationProps {
//   paymentOption: 'credit' | 'debit' | 'money' | 'pix'
// }

export function PaymentInformation() {
  const { paymentOptionValue, createPaymentOption } = useCart()
  // const [paymentOptionValue, setPaymentOptionValue] = useState('')

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
        {paymentOptions.map((item, index) => {
          return (
            <CartSelector
              isSelected={paymentOptionValue.option === item.option}
              selectionOption={item.option}
              key={index}
              handleClick={() => {
                createPaymentOption(item.option, item.title)
                // console.log(item)
                // console.log(index)
              }}
            >
              {item.title}
            </CartSelector>
          )
        })}
      </PaymentOptionsContainer>
    </PaymentInfoContainer>
  )
}
