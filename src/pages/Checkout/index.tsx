import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  ShoppingCart,
  Trash,
} from 'phosphor-react'
import {
  AddressContainer,
  AddressFormContainer,
  BaseInput,
  MediumInput,
  CheckoutContainer,
  AdjustableInput,
  ConfirmationContainer,
  PaymentContainer,
  SmallInput,
  PaymentCardContainer,
  AddressCardContainer,
  ButtonsContainer,
  BaseButton,
  AddressAndPayment,
  CoffeesSelectedContainer,
  CoffeeCard,
  CoffeeSelectionContainer,
  DeleteButton,
  Prices,
  BaseButtonSelected,
  ComplementContainer,
} from './styles'

import { NumberInput } from '../../components/NumberInput'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { handleCoffeeImage } from '../Home/components/CoffeeList'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { PaymentTypes } from '../../reducers/reducer'

const newAddressFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().min(1).optional(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(2).max(2),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export function Checkout() {
  const {
    coffees,
    itemsQuantityOnCart,
    allItemsQuantityTo1,
    formatToReal,
    removeItemFromCart,
    sumItemsOnCart,
    submitBuy,
  } = useContext(CoffeesContext)
  const page = 'checkout'
  const deliveryTax = 3.5

  const [currentPayment, setCurrentPayment] = useState<
    PaymentTypes | undefined
  >(undefined)
  const [isOptionalVisible, setIsOptionalVisible] = useState(true)

  const navigate = useNavigate()

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    },
    mode: 'onChange',
  })

  const { handleSubmit, register, reset, formState, watch, getFieldState } =
    newAddressForm

  const noItemsOnCart = itemsQuantityOnCart === 0
  const noPaymentMethod = currentPayment === undefined
  const isButtonDisabled =
    noItemsOnCart || noPaymentMethod || !formState.isValid

  const watchComplement = watch('complement')
  const complementDirty = getFieldState('complement').isDirty
  const complementInvalid = getFieldState('complement').invalid
  useEffect(() => {
    if (watchComplement === '') {
      setIsOptionalVisible(true)
    }
    if (complementDirty) {
      setIsOptionalVisible(false)
    }
  }, [watchComplement, complementDirty, complementInvalid])

  const handleSubmitUserAddress = (data: NewAddressFormData) => {
    if (!isButtonDisabled) {
      console.log('entrou no submit')

      submitBuy(data, currentPayment!)
      reset()
      navigate('/success')
    }
  }

  // set all quantities to 1, only runs once
  useEffect(() => {
    allItemsQuantityTo1()
    console.log('entrou no useeffect')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const totalCartSum = () => {
    return coffees.reduce((accumulator, current) => {
      return accumulator + current.price * current.quantityOnCart
    }, 0)
  }

  const handleRemoveItemFromCart = (coffeeId: string) => {
    removeItemFromCart(coffeeId)
    sumItemsOnCart()
  }

  const handlePaymentButton = (paymentMethod: PaymentTypes) => {
    setCurrentPayment((state) => {
      return paymentMethod
    })
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSubmitUserAddress)}>
      <AddressAndPayment>
        <h2>Complete seu pedido</h2>

        <AddressCardContainer>
          <AddressContainer>
            <header>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <h4>Informe o endereço onde deseja receber seu pedido</h4>
              </div>
            </header>
            <AddressFormContainer>
              <MediumInput
                id="cep"
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />
              <BaseInput
                id="street"
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              <div>
                <MediumInput
                  id="number"
                  type="text"
                  placeholder="Número"
                  {...register('number')}
                />
                <ComplementContainer>
                  <AdjustableInput
                    id="complement"
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  {isOptionalVisible && <span>Opcional</span>}
                </ComplementContainer>
              </div>
              <div>
                <MediumInput
                  id="neighborhood"
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                <AdjustableInput
                  id="city"
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <SmallInput
                  id="state"
                  type="text"
                  placeholder="UF"
                  {...register('uf')}
                />
              </div>
            </AddressFormContainer>
          </AddressContainer>
        </AddressCardContainer>

        <PaymentCardContainer>
          <PaymentContainer>
            <header>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <h4>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </h4>
              </div>
            </header>

            <ButtonsContainer>
              {currentPayment === PaymentTypes.Credit ? (
                <BaseButtonSelected
                  type="button"
                  onClick={() => handlePaymentButton(PaymentTypes.Credit)}
                >
                  <CreditCard size={16} />
                  <span>CARTÃO DE CRÉDITO</span>
                </BaseButtonSelected>
              ) : (
                <BaseButton
                  type="button"
                  onClick={() => handlePaymentButton(PaymentTypes.Credit)}
                >
                  <CreditCard size={16} />
                  <span>CARTÃO DE CRÉDITO</span>
                </BaseButton>
              )}

              {currentPayment === PaymentTypes.Debit ? (
                <BaseButtonSelected
                  type="button"
                  onClick={() => handlePaymentButton(PaymentTypes.Debit)}
                >
                  <Bank size={16} />
                  <span>CARTÃO DE DÉBITO</span>
                </BaseButtonSelected>
              ) : (
                <BaseButton
                  type="button"
                  onClick={() => handlePaymentButton(PaymentTypes.Debit)}
                >
                  <Bank size={16} />
                  <span>CARTÃO DE DÉBITO</span>
                </BaseButton>
              )}

              {currentPayment === PaymentTypes.Cash ? (
                <BaseButtonSelected
                  type="button"
                  onClick={() => handlePaymentButton(PaymentTypes.Cash)}
                >
                  <Money size={16} />
                  <span>DINHEIRO</span>
                </BaseButtonSelected>
              ) : (
                <BaseButton
                  type="button"
                  onClick={() => handlePaymentButton(PaymentTypes.Cash)}
                >
                  <Money size={16} />
                  <span>DINHEIRO</span>
                </BaseButton>
              )}
            </ButtonsContainer>
          </PaymentContainer>
        </PaymentCardContainer>
      </AddressAndPayment>
      <CoffeesSelectedContainer>
        <h2>Cafés selecionados</h2>
        <ConfirmationContainer>
          {coffees.map((coffee) => {
            return (
              <>
                {coffee.isOnCart && (
                  <>
                    <CoffeeSelectionContainer key={coffee.id}>
                      <CoffeeCard>
                        <img src={handleCoffeeImage(coffee.img)} alt="" />
                        <div>
                          <span>{coffee.name}</span>
                          <div>
                            <NumberInput
                              height={2}
                              coffeeId={coffee.id}
                              page={page}
                            />
                            <DeleteButton
                              onClick={() =>
                                handleRemoveItemFromCart(coffee.id)
                              }
                              type="button"
                            >
                              <Trash size={16} />
                              <span>REMOVER</span>
                            </DeleteButton>
                          </div>
                        </div>
                      </CoffeeCard>
                      <span>
                        R$ {formatToReal(coffee.price * coffee.quantityOnCart)}
                      </span>
                    </CoffeeSelectionContainer>
                    <hr />
                  </>
                )}
              </>
            )
          })}
          {noItemsOnCart && (
            <>
              <CoffeeSelectionContainer>
                <CoffeeCard>
                  <ShoppingCart size={18} />
                  <div>
                    <span>Seu carrinho está vazio!</span>
                    <p>Navegue para continuar comprando</p>
                  </div>
                </CoffeeCard>
              </CoffeeSelectionContainer>
              <hr />
            </>
          )}
          <Prices>
            <div>
              <p>Total de itens</p>
              <span>R$ {formatToReal(totalCartSum())}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ {formatToReal(deliveryTax)}</span>
            </div>
            <div>
              <p>Total</p>
              <strong>R$ {formatToReal(totalCartSum() + deliveryTax)}</strong>
            </div>
          </Prices>
          <button disabled={isButtonDisabled}>CONFIRMAR PEDIDO</button>
        </ConfirmationContainer>
      </CoffeesSelectedContainer>
    </CheckoutContainer>
  )
}
