import { createContext } from 'react'
import { CoffeeAndQuantity, CoffeeType } from '../reducers/reducer'

interface CoffeesContextType {
  coffees: CoffeeType[]
  cart: CoffeeAndQuantity[]
}

export const CyclesContext = createContext({} as CoffeesContextType)
