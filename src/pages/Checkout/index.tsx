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

import expressoImg from '../../assets/coffees/Expresso.svg'
import latteImg from '../../assets/coffees/Latte.svg'

import { NumberInput } from '../../components/NumberInput'
import { NavLink } from 'react-router-dom'

export function Checkout() {
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
          <CoffeeSelectionContainer>
            <CoffeeCard>
              <img src={expressoImg} alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <div>
                  <NumberInput height={2} />
                  <DeleteButton>
                    <Trash size={16} />
                    <span>REMOVER</span>
                  </DeleteButton>
                </div>
              </div>
            </CoffeeCard>
            <span>R$ 9,90</span>
          </CoffeeSelectionContainer>
          <hr />
          <CoffeeSelectionContainer>
            <CoffeeCard>
              <img src={latteImg} alt="" />
              <div>
                <span>Latte</span>
                <div>
                  <NumberInput height={2} />
                  <DeleteButton>
                    <Trash size={16} />
                    <span>REMOVER</span>
                  </DeleteButton>
                </div>
              </div>
            </CoffeeCard>
            <span>R$ 19,80</span>
          </CoffeeSelectionContainer>
          <hr />
          <Prices>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <strong>R$ 33,20</strong>
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
