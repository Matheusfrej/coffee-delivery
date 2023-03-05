import produce from "immer"
import { ActionsTypes } from "./actions"

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
  switch (action.type) {
    case ActionsTypes.ADD_OR_MODIFY_ITEM_TO_CART:
      return produce(state, (draft) => {
        const coffeeCartIndex = draft.cart.findIndex((coffee) => coffee.coffeeId === action.payload.coffeeAndQuantity.coffeeId)
        if (coffeeCartIndex == -1) {
          draft.cart.push(action.payload.coffeeAndQuantity)
        } else {
          draft.cart[coffeeCartIndex] = action.payload.coffeeAndQuantity
        }
      })
    default:
      return state
  }
}