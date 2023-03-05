export enum ActionsTypes {
  'ADD_OR_MODIFY_ITEM_TO_CART' = 'ADD_OR_MODIFY_ITEM_TO_CART',
  'SUBTRACT_QUANTITY' = 'SUBTRACT_QUANTITY',
  'INCREASE_QUANTITY' = 'INCREASE_QUANTITY',
  'MODIFY_QUANTITY' = 'MODIFY_QUANTITY',
}

export const addOrModifyItemToCartAction = (coffeeId:string) => {
  return {
    type: ActionsTypes.ADD_OR_MODIFY_ITEM_TO_CART,
    payload: {
      coffeeId
    }
  }
}

export const subtractQuantityAction = (coffeeId:string) => {
  return {
    type: ActionsTypes.SUBTRACT_QUANTITY,
    payload: {
      coffeeId
    }
  }
}

export const increaseQuantityAction = (coffeeId:string) => {
  console.log('entrou no increaseQuantityAction')

  return {
    type: ActionsTypes.INCREASE_QUANTITY,
    payload: {
      coffeeId
    }
  }
}

export const modifyQuantityAction = (coffeeId:string, quantity: number) => {
  return {
    type: ActionsTypes.MODIFY_QUANTITY,
    payload: {
      coffeeId,
      quantity
    }
  }
}