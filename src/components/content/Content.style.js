import styled from 'styled-components'

export const ContentWrapper = styled.div`
width: 1032px;
margin-left: auto;
margin-right: auto;
@media (max-width: 1032px) {
  width: 690px;
}
@media (max-width: 690px) {
  width: 340px;
}
`

export const TitleWrapper = styled.div`
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin-top: 36px;
  margin-bottom: 42px;
`

export const BorderDiv = styled.div`
  border-top: solid #F5F5F5 1px;
  width: 180px;
  height: 22px;
  display: inline-block;
  @media (max-width: 690px) {
    display: none;
  }
`

export const BodyTitle = styled.div`
  font-size: 20px;
  display: inline-block;
  text-align: center;
  max-width: 500px;
  color: #666363;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`

export const ProductCard = styled.div`
  width: 300px;
  height: 370px;
  border: 4px solid #F8F6F6;
  margin: 12px 18px;
  display: inline-flex;
  flex-flow: column;
  cursor: pointer;

  &:hover {
    border: 4px solid #E8E6E6;
  }
`

export const ProductImage = styled.img`
  width: 260px;
  height: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`

export const ProductName = styled.div`
  text-align: center;
`

export const ProductValue = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  height: 18px;
`
