import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";

import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";

import FooterMenu from "parts/FooterMenu";
import Footer from "parts/Footer";

export default function Cart() {
  return (
    <>
      <Header />

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section className="md:py-16 px-7 md:px-28">
        <div className="container mx-auto">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <FooterMenu />
      <Footer />
    </>
  );
}
