import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  background-color: #FCFCFC;
  border-bottom: #ECECEC solid 1px;
  padding-top: 42px;
  padding-bottom: 42px;
`

export const TopBar = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 1032px;
  @media (max-width: 1032px) {
    max-width: 690px;
  }
  @media (max-width: 690px) {
    max-width: 340px;
  }
`

export const ShopTitle = styled.a`
  font-size: 20px;
  padding: 12px 38px;
  text-decoration: none;
  color: #666363;
  font-weight: bold;

  @media (min-width: 1032px) {
    border-right: #ECECEC solid 1px;
  }
`

export const Categories = styled.a`
  font-size: 18px;
  text-decoration: none;
  padding: 24px;
  color: #808080;
  @media (max-width: 1032px) {
    display: none;
  }

  &:hover {
    background-color: #F0F0F0;
  }
`

export const CartWrapper = styled.div`
  border: solid 2px #807F7F;
  display: inline-flex;
  height: 44px;
  width: 68px;
  border-radius: 26px;
  float: right;

  &:hover {
    width: 132px;
    > div {
      display: block;
    }
  }
`

export const CartValue = styled.div`
  display: none;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
`

export const CartImage = styled.img`
  margin: auto;
  margin-left: 20px;
  width: 28;
  height: 25;
`
