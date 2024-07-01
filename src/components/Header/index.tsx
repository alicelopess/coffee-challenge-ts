import {
  ActionsWrapper,
  HeaderContainer,
  LocationPickerWrapper,
  LogoWrapper,
} from './style'
import appLogo from '../../assets/appLogo.svg'
import { NavLink } from 'react-router-dom'
import { CartButton } from '../buttons/CartButton'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartState } = useCart()
  const { cart } = cartState
  return (
    <HeaderContainer>
      <LogoWrapper>
        <NavLink to="/" title="Home">
          <img src={appLogo} alt="" />
        </NavLink>
      </LogoWrapper>
      <ActionsWrapper>
        <LocationPickerWrapper>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationPickerWrapper>
        <NavLink to="/cart" title="Cart">
          <CartButton quantity={cart.length}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </ActionsWrapper>
    </HeaderContainer>
  )
}
