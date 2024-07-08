import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
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
    icon: <CreditCard size={16} color="#8047F8" />,
  },
  {
    option: 'debit',
    title: 'Cartão de Débito',
    icon: <Bank size={16} color="#8047F8" />,
  },
  {
    option: 'cash',
    title: 'Dinheiro',
    icon: <Money size={16} color="#8047F8" />,
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
              selectorIcon={item.icon}
            >
              {item.title}
            </CartSelector>
          )
        })}
      </PaymentOptionsContainer>
    </PaymentInfoContainer>
  )
}
