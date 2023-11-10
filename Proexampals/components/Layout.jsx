import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (prop) => {
  return (
    <>
      <div className="bg-black py-3 px-5 lg:px-10 block md:flex md:justify-center md:items-center gap-3">
        <a href="tel:+14196885404" className="text-white pr-3 flex justify-center items-center text-center text-sm md:text-base md:border-r-2 md:border-r-white font-semibold">
          <i className="bx bx-phone"></i><span className="flex ml-2">+1 419-688-5404</span>
        </a>
        <a href="mailto:team@proexampals.com" className="font-semibold text-white flex justify-center items-center text-sm md:text-base">
          <i className="bx bx-envelope"></i><span className="flex ml-2">team@proexampals.com</span>
        </a>
      </div>
        <div className="min-w-screen font-medium site-wrapper relative">
          <Navbar />
          {prop.children}
          <Footer />
        </div>
        <div className="whatsapp fixed bottom-5 left-4 md:left-2">
          <a href="https://api.whatsapp.com/send?phone=15622835146" rel="noreferrer" target="_blank">
            <Image src="/WhatsApp.png" alt="WhatsApp" width={60} height={60} />
          </a>
        </div>
    </>
  );
};

export default Layout;
