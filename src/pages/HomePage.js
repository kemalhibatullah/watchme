import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Brand from "parts/Brand";
import Promo from "parts/Promo";
import Product from "parts/Product";
import Benefit from "parts/Benefit";
import Category from "parts/Category";
import SaleBanner from "parts/SaleBanner";
import FooterMenu from "parts/FooterMenu";
import Footer from "parts/Footer";

export default function Homepage(props) {
    return (
        <>
            <Header />
            <Hero />
            <Brand />
            <Product />
            <Promo />
            <Benefit />
            <Category />
            <Product />
            <SaleBanner />
            <FooterMenu />
            <Footer/>
        </>
    )
}
