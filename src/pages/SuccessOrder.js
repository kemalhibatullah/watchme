import React from 'react'
import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
import SuccessOrderDetails from 'parts/SuccessOrderDetails';
import FooterMenu from "parts/FooterMenu";
import Footer from "parts/Footer";

export default function SuccessOrder() {
    return (
        <>
            <Header />
            <Breadcrumb
                list={[
                    { url: "/", name: "Home" },
                    { url: "/order-success", name: "Success Order" },
                ]}
            />
            <SuccessOrderDetails />
            <FooterMenu />
            <Footer />
        </>
    )
}
