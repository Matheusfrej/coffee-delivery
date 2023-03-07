import produce from "immer"
import { ActionsTypes } from "./actions"

export enum TagTypes {
  'TRADICIONAL' = 'TRADICIONAL',
  'COM LEITE' = 'COM LEITE',
  'GELADO' = 'GELADO',
  'ESPECIAL' = 'ESPECIAL',
  'ALCOÓLICO' = 'ALCOÓLICO',
}

export enum PaymentTypes {
  'Credit' = 'Cartão de Crédito',
  'Debit' = 'Cartão de Débito',
  'Cash' = 'Dinheiro',
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
  quantityOnCart: number
}

export interface AddressType {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

interface CoffeesState {
  coffees: CoffeeType[]
  userAddress: AddressType | undefined
  paymentMethod: PaymentTypes | undefined
  itemsQuantityOnCart: number
}

export function coffeesReducer(state: CoffeesState, action: any) {
  console.log('entrou no coffeesReducer');
  console.log(action);
  
  
  switch (action.type) {
    case ActionsTypes.ADD_OR_MODIFY_ITEM_TO_CART: {
      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        draft.coffees[coffeeCartIndex].isOnCart = true
        draft.coffees[coffeeCartIndex].quantityOnCart += draft.coffees[coffeeCartIndex].quantity
      })
    }
    case ActionsTypes.INCREASE_QUANTITY: {
      console.log('entrou no increaseQuantity')

      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        if (action.payload.page == 'list') {
          draft.coffees[coffeeCartIndex].quantity = draft.coffees[coffeeCartIndex].quantity + 1
        } else {
          draft.coffees[coffeeCartIndex].quantityOnCart = draft.coffees[coffeeCartIndex].quantityOnCart + 1
        }
      })
    }
    case ActionsTypes.SUBTRACT_QUANTITY:
      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        if (action.payload.page == 'list') {
          if (draft.coffees[coffeeCartIndex].quantity > 1) {
            draft.coffees[coffeeCartIndex].quantity = draft.coffees[coffeeCartIndex].quantity - 1
          }
          // se for menor ou igual a 1, não faz nada
          draft.coffees[coffeeCartIndex].quantity += 0
        } else {
          if (draft.coffees[coffeeCartIndex].quantityOnCart > 1) {
            draft.coffees[coffeeCartIndex].quantityOnCart = draft.coffees[coffeeCartIndex].quantityOnCart - 1
          }
          // se for menor ou igual a 1, não faz nada
          draft.coffees[coffeeCartIndex].quantityOnCart += 0
        }
        
      })
    case ActionsTypes.MODIFY_QUANTITY:
      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        if (action.payload.page == 'list') {
          if (action.payload.quantity >= 1) {
            draft.coffees[coffeeCartIndex].quantity = action.payload.quantity
          } else {
            draft.coffees[coffeeCartIndex].quantity = 1
          }
        } else {
          if (action.payload.quantityOnCart >= 1) {
            draft.coffees[coffeeCartIndex].quantityOnCart = action.payload.quantityOnCart
          } else {
            draft.coffees[coffeeCartIndex].quantityOnCart = 1
          }
        }
        
      })
    case ActionsTypes.SUM_ITEMS_ON_CART:
      return produce(state, (draft) => {
        draft.itemsQuantityOnCart = draft.coffees.reduce((accumulator, current) => {
          if (current.isOnCart) {
            return accumulator + 1
          } else {
            return accumulator
          }
        }, 0)
      })
    case ActionsTypes.ALL_ITEMS_QUANTITY_TO_1:
      console.log('entrou no allItemsReducer');
      
      return produce(state, (draft) => {
        draft.coffees.forEach((coffee) => {
          coffee.quantity = 1
        })
      })

    case ActionsTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        const coffeeCartIndex = draft.coffees.findIndex((coffee) => coffee.id === action.payload.coffeeId)
        draft.coffees[coffeeCartIndex].isOnCart = false
        draft.coffees[coffeeCartIndex].quantityOnCart = 0
      })
    
    case ActionsTypes.SUBMIT_BUY:
      return produce(state, (draft) => {
        draft.userAddress = action.payload.address
        draft.paymentMethod = action.payload.paymentMethod

        draft.coffees.forEach((coffee) => {
          coffee.isOnCart = false
          coffee.quantityOnCart = 0
        })
        draft.itemsQuantityOnCart = 0
      })

    default:
      return state
  }
}