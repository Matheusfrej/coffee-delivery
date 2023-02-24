import {
  Actions,
  Card,
  CardFooter,
  CardHeader,
  CoffeeCardsContainer,
  CoffeeListContainer,
} from './styles'

import expressoImg from '../../../../assets/coffees/Expresso.svg'
import expressoAmericanoImg from '../../../../assets/coffees/Americano.svg'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <strong>Nossos cafés</strong>
      <CoffeeCardsContainer>
        <Card>
          <CardHeader>
            <img src={expressoImg} alt="" />

            <ul>
              <li>TRADICIONAL</li>
            </ul>
            <strong>Expresso Tradicional</strong>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </CardHeader>
          <CardFooter>
            <strong>
              <span>R$</span>9,90
            </strong>
            <Actions>
              <div>
                <input type="number" />
                <span>
                  <Minus size={14} weight="bold" />
                </span>
                <span>
                  <Plus size={14} weight="bold" />
                </span>
              </div>
              <ShoppingCart size={38} weight="fill" />
            </Actions>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src={expressoAmericanoImg} alt="" />

            <ul>
              <li>TRADICIONAL</li>
            </ul>
            <strong>Expresso Americano</strong>
            <p>Expresso diluído, menos intenso que o tradicional</p>
          </CardHeader>
          <CardFooter>
            <strong>
              <span>R$</span>9,90
            </strong>
            <Actions>
              <div>
                <input type="number" />
                <span>
                  <Minus size={14} weight="bold" />
                </span>
                <span>
                  <Plus size={14} weight="bold" />
                </span>
              </div>
              <ShoppingCart size={38} weight="fill" />
            </Actions>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src="" alt="" />
            <span></span>
            <strong></strong>
            <p></p>
          </CardHeader>
          <CardFooter>
            <span></span>
            <input type="number" />
            <button></button>
          </CardFooter>
        </Card>
      </CoffeeCardsContainer>
    </CoffeeListContainer>
  )
}
