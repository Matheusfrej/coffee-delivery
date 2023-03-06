export enum ActionsTypes {
  'ADD_OR_MODIFY_ITEM_TO_CART' = 'ADD_OR_MODIFY_ITEM_TO_CART',
  'SUBTRACT_QUANTITY' = 'SUBTRACT_QUANTITY',
  'INCREASE_QUANTITY' = 'INCREASE_QUANTITY',
  'MODIFY_QUANTITY' = 'MODIFY_QUANTITY',
  'SUM_ITEMS_ON_CART' = 'SUM_ITEMS_ON_CART',
  'ALL_ITEMS_QUANTITY_TO_1' = 'ALL_ITEMS_QUANTITY_TO_1',
  'REMOVE_ITEM_FROM_CART' = 'REMOVE_ITEM_FROM_CART'
}

export const addOrModifyItemToCartAction = (coffeeId:string) => {
  return {
    type: ActionsTypes.ADD_OR_MODIFY_ITEM_TO_CART,
    payload: {
      coffeeId
    }
  }
}

export const subtractQuantityAction = (coffeeId:string, page: string) => {
  return {
    type: ActionsTypes.SUBTRACT_QUANTITY,
    payload: {
      coffeeId,
      page
    }
  }
}

export const increaseQuantityAction = (coffeeId:string, page: string) => {
  console.log('entrou no increaseQuantityAction')

  return {
    type: ActionsTypes.INCREASE_QUANTITY,
    payload: {
      coffeeId,
      page
    }
  }
}

export const modifyQuantityAction = (coffeeId:string, quantity: number, page: string) => {
  return {
    type: ActionsTypes.MODIFY_QUANTITY,
    payload: {
      coffeeId,
      quantity,
      page
    }
  }
}

export const sumItemsOnCartAction = () => {
  return {
    type: ActionsTypes.SUM_ITEMS_ON_CART
  }
}

export const allItemsQuantityTo1Action = () => {
  console.log('entrou no allItemsAction');
  
  return {
    type: ActionsTypes.ALL_ITEMS_QUANTITY_TO_1
  }
}

export const removeItemFromCartAction = (coffeeId: string) => {
  return {
    type: ActionsTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      coffeeId
    }
  }
}