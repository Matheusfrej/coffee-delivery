import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addOrModifyItemToCartAction,
  allItemsQuantityTo1Action,
  increaseQuantityAction,
  modifyQuantityAction,
  removeItemFromCartAction,
  submitBuyAction,
  subtractQuantityAction,
  sumItemsOnCartAction,
} from '../reducers/actions'
import {
  AddressType,
  coffeesReducer,
  CoffeeType,
  PaymentTypes,
  TagTypes,
} from '../reducers/reducer'

interface NewAddressData {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

interface CoffeesContextType {
  coffees: CoffeeType[]
  itemsQuantityOnCart: number
  userAddress: AddressType | undefined
  paymentMethod: PaymentTypes | undefined
  addOrModifyItemToCart: (coffeeId: string, page: string) => void
  subtractQuantity: (coffeeId: string, page: string) => void
  increaseQuantity: (coffeeId: string, page: string) => void
  modifyQuantity: (coffeeId: string, quantity: number, page: string) => void
  sumItemsOnCart: () => void
  allItemsQuantityTo1: () => void
  removeItemFromCart: (coffeeId: string) => void
  formatToReal: (price: number) => string
  submitBuy: (address: AddressType, paymentMethod: PaymentTypes) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [
        {
          id: '1',
          img: 'Expresso.svg',
          tags: [TagTypes.TRADICIONAL],
          name: 'Expresso Tradicional',
          description:
            'O tradicional café feito com água quente e grãos moídos',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '2',
          img: 'Americano.svg',
          tags: [TagTypes.TRADICIONAL],
          name: 'Expresso Americano',
          description: 'Expresso diluído, menos intenso que o tradicional',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '3',
          img: 'ExpressoCremoso.svg',
          tags: [TagTypes.TRADICIONAL],
          name: 'Expresso Cremoso',
          description: 'Café expresso tradicional com espuma cremosa',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '4',
          img: 'CaféGelado.svg',
          tags: [TagTypes.TRADICIONAL, TagTypes.GELADO],
          name: 'ExpressoGelado',
          description: 'Bebida preparada com café expresso e cubos de gelo',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '5',
          img: 'CafécomLeite.svg',
          tags: [TagTypes.TRADICIONAL, TagTypes['COM LEITE']],
          name: 'Café com Leite',
          description:
            'Meio a meio de expresso tradicional com leite vaporizado',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '6',
          img: 'Latte.svg',
          tags: [TagTypes.TRADICIONAL, TagTypes['COM LEITE']],
          name: 'Latte',
          description:
            'Uma dose de café expresso com o dobro de leite e espuma cremosa',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '7',
          img: 'Capuccino.svg',
          tags: [TagTypes.TRADICIONAL, TagTypes['COM LEITE']],
          name: 'Capuccino',
          description:
            'Bebida com canela feita de doses iguais de café, leite e espuma',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '8',
          img: 'Macchiato.svg',
          tags: [TagTypes.TRADICIONAL, TagTypes['COM LEITE']],
          name: 'Macchiato',
          description:
            'Café expresso misturado com um pouco de leite quente e espuma',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '9',
          img: 'Mocaccino.svg',
          tags: [TagTypes.TRADICIONAL, TagTypes['COM LEITE']],
          name: 'Mocaccino',
          description:
            'Café expresso com calda de chocolate, pouco leite e espuma',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '10',
          img: 'ChocolateQuente.svg',
          tags: [TagTypes.ESPECIAL, TagTypes['COM LEITE']],
          name: 'Chocolate Quente',
          description:
            'Bebida feita com chocolate dissolvido no leite quente e café',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '11',
          img: 'Cubano.svg',
          tags: [TagTypes.ESPECIAL, TagTypes.ALCOÓLICO, TagTypes.GELADO],
          name: 'Cubano',
          description:
            'Drink gelado de café expresso com rum, creme de leite e hortelã',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '12',
          img: 'Havaiano.svg',
          tags: [TagTypes.ESPECIAL],
          name: 'Havaiano',
          description: 'Bebida adocicada preparada com café e leite de coco',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '13',
          img: 'Árabe.svg',
          tags: [TagTypes.ESPECIAL],
          name: 'Árabe',
          description: 'Bebida preparada com grãos de café árabe e especiarias',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
        {
          id: '14',
          img: 'Irlandês.svg',
          tags: [TagTypes.ESPECIAL, TagTypes.ALCOÓLICO],
          name: 'Irlandês',
          description:
            'Bebida a base de café, uísque irlandês, açúcar e chantilly',
          price: 9.9,
          isOnCart: false,
          quantity: 1,
          quantityOnCart: 0,
        },
      ],
      itemsQuantityOnCart: 0,
      userAddress: undefined,
      paymentMethod: undefined,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffeesState-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { coffees, itemsQuantityOnCart, userAddress, paymentMethod } =
    coffeesState

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-delivery:coffeesState-1.0.0', stateJSON)
  }, [coffeesState])

  const addOrModifyItemToCart = (coffeeId: string) => {
    dispatch(addOrModifyItemToCartAction(coffeeId))
  }

  const subtractQuantity = (coffeeId: string, page: string) => {
    dispatch(subtractQuantityAction(coffeeId, page))
  }

  const increaseQuantity = (coffeeId: string, page: string) => {
    dispatch(increaseQuantityAction(coffeeId, page))
  }

  const modifyQuantity = (coffeeId: string, quantity: number, page: string) => {
    dispatch(modifyQuantityAction(coffeeId, quantity, page))
  }

  const sumItemsOnCart = () => {
    dispatch(sumItemsOnCartAction())
  }

  const allItemsQuantityTo1 = () => {
    dispatch(allItemsQuantityTo1Action())
  }

  const removeItemFromCart = (coffeeId: string) => {
    dispatch(removeItemFromCartAction(coffeeId))
  }

  const formatToReal = (price: number) => {
    return price.toFixed(2).replace('.', ',')
  }

  const submitBuy = (data: NewAddressData, paymentMethod: PaymentTypes) => {
    const newAddress: AddressType = {
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      uf: data.uf,
    }
    dispatch(submitBuyAction(newAddress, paymentMethod))
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        itemsQuantityOnCart,
        userAddress,
        paymentMethod,
        addOrModifyItemToCart,
        subtractQuantity,
        increaseQuantity,
        modifyQuantity,
        sumItemsOnCart,
        allItemsQuantityTo1,
        removeItemFromCart,
        formatToReal,
        submitBuy,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
