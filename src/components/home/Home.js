import React, { Fragment } from 'react'
import { TopBar, Categories, ShopTitle } from './Home.style'

const Home = () => (
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

export default Home;
