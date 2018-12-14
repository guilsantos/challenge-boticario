import React from 'react'
import { Wrapper } from './Home.style'
import TopBar from '../topBar'
import Content from '../content'
import enhancer from './Home.hoc'

const Home = ({ products }) => (
<Wrapper>
  <TopBar />
  <Content products={products} />
</Wrapper>
)

export default enhancer(Home)
