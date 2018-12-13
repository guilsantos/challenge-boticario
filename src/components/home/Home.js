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
import { Wrapper, TopBar, Categories, ShopTitle, BodyTitle } from './Home.style'
import { MASKED as HOME } from './Home.messages'

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
  <TopBar>
    <ShopTitle href="#home">{HOME.topbar.store}</ShopTitle>
    <Categories href="#perfumaria">{HOME.topbar.perfumery}</Categories>
    <Categories href="#maquiagem">{HOME.topbar.makeUp}</Categories>
    <Categories href="#cabelo">{HOME.topbar.hair}</Categories>
    <Categories href="#infantil">{HOME.topbar.child}</Categories>
  </TopBar>
  <BodyTitle>{HOME.body.title}</BodyTitle>
</Wrapper>
)

export default enhancer(Home)
