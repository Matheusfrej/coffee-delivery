import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  AddressAndPaymentContainer,
  AddressContainer,
  AddressFormContainer,
  BaseInput,
  CepInput,
  CheckoutContainer,
  ComplementInput,
  ConfirmationContainer,
  PaymentContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <AddressAndPaymentContainer>
          <AddressContainer>
            <header>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <h4>Informe o endereço onde deseja receber seu pedido</h4>
              </div>
            </header>
            <AddressFormContainer>
              <CepInput id="cep" type="text" placeholder="CEP" />
              <BaseInput id="street" type="text" placeholder="Rua" />
              <div>
                <BaseInput id="number" type="text" placeholder="Número" />
                <label htmlFor=""></label>
                <ComplementInput
                  id="complement"
                  type="text"
                  placeholder="Complemento"
                />
              </div>
              <div>
                <input id="neighborhood" type="text" placeholder="Bairro" />
                <input id="city" type="text" placeholder="Cidade" />
                <input id="state" type="text" placeholder="UF" />
              </div>
            </AddressFormContainer>
          </AddressContainer>
          <PaymentContainer>
            <header>
              <CurrencyDollar size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <h4>Informe o endereço onde deseja receber seu pedido</h4>
              </div>
            </header>
          </PaymentContainer>
        </AddressAndPaymentContainer>
      </div>
      <div>
        <strong>Cafés selecionados</strong>
        <ConfirmationContainer></ConfirmationContainer>
      </div>
    </CheckoutContainer>
  )
}
