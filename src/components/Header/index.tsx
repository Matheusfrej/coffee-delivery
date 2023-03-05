import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import coffeeLogo from '../../assets/coffee-delivery-logo.svg'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { ActionsContainer, HeaderContainer } from './styles'

export function Header() {
  const { itemsQuantityOnCart } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={coffeeLogo} alt="Logo da Coffee Delivery" />
      </NavLink>

      <ActionsContainer>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Recife, PE</span>
        </div>

        <span>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={38} weight="fill" />
          </NavLink>
          {itemsQuantityOnCart > 0 && <span>{itemsQuantityOnCart}</span>}
        </span>
      </ActionsContainer>
    </HeaderContainer>
  )
}
