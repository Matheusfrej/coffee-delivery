import { ShoppingCart, MapPin } from 'phosphor-react'
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

        <ShoppingCart size={38} weight="fill" />
      </ActionsContainer>
    </HeaderContainer>
  )
}
