import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: sans-serif;
`

export const TopBar = styled.div`
  overflow: hidden;
  background-color: #FCFCFC;
  border-bottom: #EBEBEB solid;
  padding-top: 24px;
  padding-bottom: 24px;
`

export const ShopTitle = styled.a`
  font-size: 20px;
  border-right: #EBEBEB solid;
  padding: 12px 24px;
  text-decoration: none;
  color: black;
  font-weight: bold;
`

export const Categories = styled.a`
  font-size: 18px;
  text-decoration: none;
  padding: 24px;
  color: grey;
`

export const BodyTitle = styled.div`
  font-size: 20px;
  display: block;
  text-align: center;
  max-width: 500px;
  margin: 24px auto;
  color: grey;

  ::before {
    border-top: 1px solid;
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    width: 50%; /* Change this to whatever width you want. */
  }
`
