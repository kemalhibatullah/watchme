import React from 'react'
import Header from 'parts/Header'
import ErrorPageMessage from 'parts/ErrorPageMessage';
import FooterMenu from "parts/FooterMenu";
import Footer from "parts/Footer";

export default function ErrorPage() {
    return (
        <>
            <Header />
            <ErrorPageMessage />
            <FooterMenu />
            <Footer />
        </>
    )
}
