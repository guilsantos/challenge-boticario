import React from 'react'
import {
  compose,
  lifecycle,
  withState
} from 'recompose'
import axios from 'axios'
import { Wrapper } from './Home.style'
import TopBar from '../topBar'
import Content from '../content'

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

const Home = ({ products }) => (
<Wrapper>
  <TopBar />
  <Content products={products} />
</Wrapper>
)

export default enhancer(Home)
