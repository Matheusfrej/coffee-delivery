import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
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
} from './styles'

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
      <div>
        <strong>Cafés selecionados</strong>
        <ConfirmationContainer></ConfirmationContainer>
      </div>
    </CheckoutContainer>
  )
}
