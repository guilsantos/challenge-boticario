import React, { Fragment } from 'react'
import {
  compose,
  withProps,
  withHandlers,
  setPropTypes,
  lifecycle,
  withState
} from 'recompose'
import axios from 'axios'
import { Wrapper, HeaderWrapper, TopBar, Categories, CartImage, CartWrapper, ShopTitle, BodyTitle, BorderDiv, TitleWrapper, ProductCard, BodyWrapper, ProductImage, ProductName, ProductValue, ContentWrapper } from './Home.style'
import cart from '../../assets/cart.png'
import { HOME } from './Home.messages'

const URL = "products.json"

const enhancer = compose(
  withState('products', 'setProducts', []),
  lifecycle({
    componentDidMount() {
      axios.get(URL)
        .then(res => this.props.setProducts(res.data))
    }
  }),
)

const Home = ({ products }) => console.log('products', products) || (
<Wrapper>
  <HeaderWrapper>
    <TopBar>
      <ShopTitle href="#home">{HOME.topbar.store}</ShopTitle>
      <Categories href="#perfumaria">{HOME.topbar.perfumery}</Categories>
      <Categories href="#maquiagem">{HOME.topbar.makeUp}</Categories>
      <Categories href="#cabelo">{HOME.topbar.hair}</Categories>
      <Categories href="#infantil">{HOME.topbar.child}</Categories>
      <CartWrapper><CartImage src={cart} width={28} height={25} /></CartWrapper>
    </TopBar>
  </HeaderWrapper>
  <ContentWrapper>
    <TitleWrapper>
      <BorderDiv />
      <BodyTitle>{HOME.body.title}</BodyTitle>
      <BorderDiv />
    </TitleWrapper>
    <BodyWrapper>
      {products.map(product => (
        <ProductCard>
          <ProductImage src={product.images[0].imageUrl} />
          <ProductName>{product.name}</ProductName>
          <ProductValue>R$ {product.Value}</ProductValue>
        </ProductCard>
      ))}
    </BodyWrapper>
  </ContentWrapper>
</Wrapper>
)

export default enhancer(Home)
