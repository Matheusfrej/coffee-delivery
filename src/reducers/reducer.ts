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
  isOnCart: boolean
  quantity: number
}
interface CoffeeAndQuantity {

}
interface CoffeesState {
  coffees: CoffeeType[]
  // currentQuantity
}

export function coffeesReducer(state: CoffeesState, action: any) {
  console.log('entrou no coffeesReducer');
  console.log(action);
  
  
  switch (action.type) {
    case ActionsTypes.ADD_OR_MODIFY_ITEM_TO_CART: {
      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        draft.coffees[coffeeCartIndex].isOnCart = true
      })
    }
    case ActionsTypes.INCREASE_QUANTITY: {
      console.log('entrou no increaseQuantity')

      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        draft.coffees[coffeeCartIndex].quantity = draft.coffees[coffeeCartIndex].quantity + 1
      })
    }
    case ActionsTypes.SUBTRACT_QUANTITY:
      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        if (draft.coffees[coffeeCartIndex].quantity > 1) {
          draft.coffees[coffeeCartIndex].quantity = draft.coffees[coffeeCartIndex].quantity - 1
        }
        // se for menor ou igual a 1, não faz nada
        draft.coffees[coffeeCartIndex].quantity += 0
      })
    case ActionsTypes.MODIFY_QUANTITY:
      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        if (action.payload.quantity >= 1) {
          draft.coffees[coffeeCartIndex].quantity = action.payload.quantity
        } else {
          draft.coffees[coffeeCartIndex].quantity = 1

        }
        // se for menor ou igual a 1, deixa como 1 que é o mínimo
      })
    default:
      return state
  }
}