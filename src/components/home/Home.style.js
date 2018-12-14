import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: sans-serif;
`

export const TopBar = styled.div`
  overflow: hidden;
  background-color: #FCFCFC;
  border-bottom: #ECECEC solid 1px;
  padding-top: 24px;
  padding-bottom: 24px;
`

export const ShopTitle = styled.a`
  font-size: 20px;
  border-right: #ECECEC solid 1px;
  padding: 12px 24px;
  text-decoration: none;
  color: #666363;
  font-weight: bold;
`

export const Categories = styled.a`
  font-size: 18px;
  text-decoration: none;
  padding: 24px;
  color: #808080;
`

export const TitleWrapper = styled.div`
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin-top: 36px;
  margin-bottom: 42px;
`

export const BodyTitle = styled.div`
  font-size: 20px;
  display: inline-block;
  text-align: center;
  max-width: 500px;
  color: #666363;
`

export const BorderDiv = styled.div`
  border-top: solid #F5F5F5 1px;
  width: 180px;
  height: 22px;
  display: inline-block;
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
