import { CoffeeAndQuantity } from './reducer'

export enum ActionsTypes {
  'ADD_OR_MODIFY_ITEM_TO_CART' = 'ADD_OR_MODIFY_ITEM_TO_CART'
}

export const addOrModifyItemToCartAction = (coffeeAndQuantity: CoffeeAndQuantity) => {
  return {
    type: ActionsTypes.ADD_OR_MODIFY_ITEM_TO_CART,
    payload: {
      coffeeAndQuantity
    }
  }
}