import introImg from '../../../../assets/intro-image.svg'
import homeBackground from '../../../../assets/home-background.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  Advantages,
  IntroContainer,
  IntroMainContainer,
  TitleAndAdvantagesContainer,
  Titles,
} from './styles'

export function Intro() {
  return (
    <IntroContainer style={{ backgroundImage: `url(${homeBackground})` }}>
      <IntroMainContainer>
        <TitleAndAdvantagesContainer>
          <Titles>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </Titles>
          <Advantages>
            <div>
              <ShoppingCart size={32} weight="fill" />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </div>
          </Advantages>
        </TitleAndAdvantagesContainer>

        <img
          src={introImg}
          alt="Imagem estilizada de um copo de café com a logo do Coffee Delivery e alguns tipos de café"
        />
      </IntroMainContainer>
    </IntroContainer>
  )
}
