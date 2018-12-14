import React from 'react'
import { HOME } from '../../config/Home.messages'
import { ContentWrapper,
  TitleWrapper,
  BorderDiv,
  BodyTitle,
  BodyWrapper,
  ProductCard,
  ProductImage,
  ProductName,
  ProductValue
} from './Content.style'

const Content = ({ products }) => (
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
)

export default Content
