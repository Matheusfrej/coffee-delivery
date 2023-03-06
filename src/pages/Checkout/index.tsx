import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
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
} from './styles'

import { NumberInput } from '../../components/NumberInput'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { handleCoffeeImage } from '../Home/components/CoffeeList'

export function Checkout() {
  const { coffees, allItemsQuantityTo1, formatToReal, removeItemFromCart } =
    useContext(CoffeesContext)
  const page = 'checkout'
  const deliveryTax = 3.5

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

  return (
    <CheckoutContainer>
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
              <MediumInput id="cep" type="text" placeholder="CEP" />
              <BaseInput id="street" type="text" placeholder="Rua" />
              <div>
                <MediumInput id="number" type="text" placeholder="Número" />
                <label htmlFor=""></label>
                <AdjustableInput
                  id="complement"
                  type="text"
                  placeholder="Complemento"
                />
              </div>
              <div>
                <MediumInput
                  id="neighborhood"
                  type="text"
                  placeholder="Bairro"
                />
                <AdjustableInput id="city" type="text" placeholder="Cidade" />
                <SmallInput id="state" type="text" placeholder="UF" />
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
              <BaseButton>
                <CreditCard size={16} />
                <span>CARTÃO DE CRÉDITO</span>
              </BaseButton>
              <BaseButton>
                <Bank size={16} />
                <span>CARTÃO DE DÉBITO</span>
              </BaseButton>
              <BaseButton>
                <Money size={16} />
                <span>DINHEIRO</span>
              </BaseButton>
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
                              onClick={() => removeItemFromCart(coffee.id)}
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
          <NavLink to="/success" title="Confirmar">
            <button>CONFIRMAR PEDIDO</button>
          </NavLink>
        </ConfirmationContainer>
      </CoffeesSelectedContainer>
    </CheckoutContainer>
  )
}
