import React, { Fragment } from 'react'
import {
  compose,
  withProps,
  withHandlers,
  setPropTypes,
  pure,
  lifecycle,
  withState
} from 'recompose'
import axios from 'axios'
import productsList from '../../services/products'
import { TopBar, Categories, ShopTitle } from './Home.style'

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
<Fragment>
  <TopBar>
    <ShopTitle href="#home">MINHA LOJA</ShopTitle>
    <Categories href="#perfumaria">PERFUMARIA</Categories>
    <Categories href="#maquiagem">MAQUIAGEM</Categories>
    <Categories href="#cabelo">CABELOS</Categories>
    <Categories href="#infantil">INFANTIL</Categories>
  </TopBar>
</Fragment>
)

export default enhancer(Home)
