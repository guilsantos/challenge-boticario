import React from 'react'
import { HOME } from '../../config/Home.messages'
import {
  HeaderWrapper,
  TopBar,
  ShopTitle,
  Categories,
  CartWrapper,
  CartImage,
  CartValue
} from './TopBar.style'
import cart from '../../assets/cart.png'

const Component = () => (
  <HeaderWrapper>
    <TopBar>
      <ShopTitle href="#home">{HOME.topbar.store}</ShopTitle>
      <Categories href="#perfumaria">{HOME.topbar.perfumery}</Categories>
      <Categories href="#maquiagem">{HOME.topbar.makeUp}</Categories>
      <Categories href="#cabelo">{HOME.topbar.hair}</Categories>
      <Categories href="#infantil">{HOME.topbar.child}</Categories>
      <CartWrapper>
        <CartImage src={cart} />
        <CartValue>R$ 00,00</CartValue>
      </CartWrapper>
    </TopBar>
  </HeaderWrapper>
)

export default Component