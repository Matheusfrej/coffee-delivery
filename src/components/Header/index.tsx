import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeeLogo from '../../assets/coffee-delivery-logo.svg'
import { ActionsContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="Logo da Coffee Delivery" />

      <ActionsContainer>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Recife, PE</span>
        </div>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={38} weight="fill" />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
