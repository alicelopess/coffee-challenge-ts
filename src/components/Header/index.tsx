import {
  ActionsWrapper,
  HeaderContainer,
  LocationPickerWrapper,
  LogoWrapper,
} from './style'
import appLogo from '../../assets/appLogo.svg'
import { CartButton } from '../buttons/CartButton'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <img src={appLogo} alt="" />
      </LogoWrapper>
      <ActionsWrapper>
        <LocationPickerWrapper>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationPickerWrapper>
        <CartButton quantity={0}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ActionsWrapper>
    </HeaderContainer>
  )
}
