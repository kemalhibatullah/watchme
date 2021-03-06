import React from 'react'
import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
import ProductDetails from 'parts/DetailProduct/ProductDetails'
import Suggestion from 'parts/DetailProduct/Suggestion'
import FooterMenu from "parts/FooterMenu";
import Footer from "parts/Footer";

export default function DetailProduct() {
    return (
        <>
            <Header />
            <Breadcrumb
                list={[
                    { url: "/", name: "Home" },
                    { url: "/categories/89", name: "Modern" },
                    { url: "/categories/89/products/1", name: "Details" },
                ]}
            />
            <ProductDetails />
            <Suggestion />
            <FooterMenu />
            <Footer />
        </>
    )
}
