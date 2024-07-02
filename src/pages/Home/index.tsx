import {
  HomeContainer,
  // IntroSectionBackground,
  IntroSectionContent,
  IntroSectionImage,
  IntroSectionMainContent,
  IntroSectionSecondaryContentItem,
  IntroSectionSecondaryContentWrapper,
  IntroSectionWrapper,
} from './style'
import homeIntroImage from '../../assets/homeIntroImage.svg'
// import homeIntroBackground from '../../assets/homeIntroBackground.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { ProductList } from './components/ProductList'

export function Home() {
  return (
    <HomeContainer>
      <IntroSectionWrapper>
        <IntroSectionContent>
          <IntroSectionMainContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o <strong>Coffee Delivery</strong> você recebe seu café onde
              estiver, a qualquer hora!
            </span>
          </IntroSectionMainContent>
          <IntroSectionSecondaryContentWrapper>
            <IntroSectionSecondaryContentItem>
              <div style={{ background: '#C47F17' }}>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </IntroSectionSecondaryContentItem>
            <IntroSectionSecondaryContentItem>
              <div style={{ background: '#574F4D' }}>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </IntroSectionSecondaryContentItem>
            <IntroSectionSecondaryContentItem>
              <div style={{ background: '#DBAC2C' }}>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </IntroSectionSecondaryContentItem>
            <IntroSectionSecondaryContentItem>
              <div style={{ background: '#8047F8' }}>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </IntroSectionSecondaryContentItem>
          </IntroSectionSecondaryContentWrapper>
        </IntroSectionContent>
        <IntroSectionImage src={homeIntroImage} alt="" />
        {/* <IntroSectionBackground src={homeIntroBackground} /> */}
      </IntroSectionWrapper>
      <ProductList />
    </HomeContainer>
  )
}
