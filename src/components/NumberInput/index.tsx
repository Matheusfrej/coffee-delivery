import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { NumberInputContainer } from './styles'
interface NumberInputProps {
  height?: number
  coffeeId: string
  page: string
}

export function NumberInput({ height = 2, coffeeId, page }: NumberInputProps) {
  const { coffees, subtractQuantity, increaseQuantity, modifyQuantity } =
    useContext(CoffeesContext)

  const [currentQuantity, setCurrentQuantity] = useState(1)

  const handleSubtractQuantity = () => {
    subtractQuantity(coffeeId, page)
  }

  const handleIncreaseQuantity = () => {
    console.log('chamou o increaseQuantity')
    increaseQuantity(coffeeId, page)
  }

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    modifyQuantity(coffeeId, +event.target.value, page)
  }

  useEffect(() => {
    const currentCoffeeIndex = coffees.findIndex(
      (coffee) => coffee.id === coffeeId,
    )
    if (currentCoffeeIndex === -1) {
      setCurrentQuantity(1)
    } else {
      if (page === 'list') {
        setCurrentQuantity(coffees[currentCoffeeIndex].quantity)
      } else {
        setCurrentQuantity(coffees[currentCoffeeIndex].quantityOnCart)
      }
    }
  }, [coffees, currentQuantity, coffeeId, page])

  return (
    <NumberInputContainer height={height}>
      <input
        type="number"
        id="quantity"
        min={1}
        value={currentQuantity}
        onChange={handleChangeQuantity}
        required
      />
      <span onClick={handleSubtractQuantity}>
        <Minus size={14} weight="bold" />
      </span>
      <span onClick={handleIncreaseQuantity}>
        <Plus size={14} weight="bold" />
      </span>
    </NumberInputContainer>
  )
}
