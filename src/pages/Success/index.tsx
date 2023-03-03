import { Informations, SuccessContainer } from './styles'
import deliveryImg from '../../assets/delivery-illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <div>
        <Informations>
          <div>
            <MapPin size={32} weight="fill" />
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos, Porto Alegre, RS</span>
            </div>
          </div>
          <div>
            <Timer size={32} weight="fill" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </div>
          <div>
            <CurrencyDollar size={32} />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </div>
        </Informations>

        <img
          src={deliveryImg}
          alt="Ilustração de um delivery indo entregar o café"
        />
      </div>
    </SuccessContainer>
  )
}
