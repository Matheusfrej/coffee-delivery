import {
  Actions,
  Card,
  CardFooter,
  CardHeader,
  CoffeeCardsContainer,
  CoffeeListContainer,
} from './styles'

import expressoImg from '../../../../assets/coffees/Expresso.svg'
import expressoAmericanoImg from '../../../../assets/coffees/Americano.svg'
import expressoCremosoImg from '../../../../assets/coffees/ExpressoCremoso.svg'
import expressoGeladoImg from '../../../../assets/coffees/CaféGelado.svg'
import cafeComLeiteImg from '../../../../assets/coffees/CafécomLeite.svg'
import latteImg from '../../../../assets/coffees/Latte.svg'
import CapuccinoImg from '../../../../assets/coffees/Capuccino.svg'
import macchiatoImg from '../../../../assets/coffees/Macchiato.svg'
import mocaccinoImg from '../../../../assets/coffees/Mocaccino.svg'
import chocolateQuenteImg from '../../../../assets/coffees/ChocolateQuente.svg'
import cubanoImg from '../../../../assets/coffees/Cubano.svg'
import havaianoImg from '../../../../assets/coffees/Havaiano.svg'
import arabeImg from '../../../../assets/coffees/Árabe.svg'
import irlandesImg from '../../../../assets/coffees/Irlandês.svg'

import { ShoppingCart } from 'phosphor-react'
import { NumberInput } from '../../../../components/NumberInput'
import { FormEvent, useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

export const handleCoffeeImage = (img: string) => {
  if (img === 'Expresso.svg') {
    return expressoImg
  } else if (img === 'Americano.svg') {
    return expressoAmericanoImg
  } else if (img === 'ExpressoCremoso.svg') {
    return expressoCremosoImg
  } else if (img === 'CaféGelado.svg') {
    return expressoGeladoImg
  } else if (img === 'CafécomLeite.svg') {
    return cafeComLeiteImg
  } else if (img === 'Latte.svg') {
    return latteImg
  } else if (img === 'Capuccino.svg') {
    return CapuccinoImg
  } else if (img === 'Macchiato.svg') {
    return macchiatoImg
  } else if (img === 'Mocaccino.svg') {
    return mocaccinoImg
  } else if (img === 'ChocolateQuente.svg') {
    return chocolateQuenteImg
  } else if (img === 'Cubano.svg') {
    return cubanoImg
  } else if (img === 'Havaiano.svg') {
    return havaianoImg
  } else if (img === 'Árabe.svg') {
    return arabeImg
  } else if (img === 'Irlandês.svg') {
    return irlandesImg
  }
  return expressoImg
}

export function CoffeeList() {
  const { coffees, addOrModifyItemToCart, sumItemsOnCart } =
    useContext(CoffeesContext)

  const page = 'list'

  const handleAddorModifyItemToCart =
    (coffeeId: string) => (event: FormEvent) => {
      event.preventDefault()
      addOrModifyItemToCart(coffeeId, page)
      sumItemsOnCart()
      console.log(coffees)
    }

  return (
    <CoffeeListContainer>
      <strong>Nossos cafés</strong>
      <CoffeeCardsContainer>
        {coffees.map((coffee) => {
          return (
            <Card key={coffee.id}>
              <CardHeader>
                <img src={handleCoffeeImage(coffee.img)} alt="" />

                <ul>
                  {coffee.tags.map((tag) => {
                    return <li key={(coffee.name, tag)}>{tag}</li>
                  })}
                </ul>
                <strong>{coffee.name}</strong>
                <p>{coffee.description}</p>
              </CardHeader>
              <CardFooter>
                <strong>
                  <span>R$</span>
                  {coffee.price.toFixed(2).replace('.', ',')}
                </strong>
                <Actions>
                  <NumberInput
                    height={2.375}
                    coffeeId={coffee.id}
                    page={page}
                  />
                  <button
                    type="submit"
                    onClick={handleAddorModifyItemToCart(coffee.id)}
                  >
                    <ShoppingCart size={38} weight="fill" />
                  </button>
                </Actions>
              </CardFooter>
            </Card>
          )
        })}
      </CoffeeCardsContainer>
    </CoffeeListContainer>
  )
}
