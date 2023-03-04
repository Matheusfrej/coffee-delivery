export enum TagTypes {
  'TRADICIONAL' = 'TRADICIONAL',
  'COM LEITE' = 'COM LEITE',
  'GELADO' = 'GELADO',
  'ESPECIAL' = 'ESPECIAL',
  'ALCOÓLICO' = 'ALCOÓLICO',
}

export interface CoffeeType {
  id: string
  img: string
  tags: TagTypes[]
  name: string
  description: string
  price: number
}

export interface CoffeeAndQuantity {
  coffeeId: string
  quantity: number
}

interface CoffeesState {
  coffees: CoffeeType[]
  cart: CoffeeAndQuantity[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  return state
}