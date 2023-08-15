
import React from "react";
import Image from 'next/image';
import Link from "next/link";

const date = new Date();

const Footer = ({ children }) => {
  const backToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
	<div className="bg-black pt-5 pb-5 font-normal">
      <div className="flex justify-between items-center px-5 lg:px-10">
        <div className="flex">
          <Image src="/logo.png" alt="Logo" width={ 230 } height={ 40 } />
        </div>
        <div className="flex justify-start items-center gap-3" onClick={backToTop}>
          <p className="font-light text-white hidden lg:flex">Back to Top</p>
          <Image src="/slide_up.png" alt="Logo" width={ 40 } height={ 40 } />
        </div>
      </div>
        <div className="border-t-slate-300 border-t-2 border-b-2 border-b-slate-300 mt-2 mb-5 pt-10 pb-5 px-10">
            <ul className="text-slate-300 list-none m-0 flex flex-col lg:flex-row lg:justify-center gap-5 lg:gap-20">
                <li className="font-normal text-center lg:text-left">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-normal text-center lg:text-left">
                  <Link href={{
                    pathname: '/',
                    query: 'online-class' // the data
                    }}
                  >Online Class Help</Link>
                </li>
                <li className="font-normal text-center lg:text-left">
                  <Link href={{
                      pathname: '/',
                      query: 'online-coursework' // the data
                      }}
                    >Online Coursework Help</Link>
                </li>
                <li className="font-normal text-center lg:text-left">
                  <Link href="terms-conditions">Terms & Conditions</Link>
                </li>
            </ul>
            <p className="text-center py-10">
                <Image src="/payment.png" alt="Logo" width={ 400 } height={ 40 } className="lg:mx-auto" />
            </p>
            <p className="lg:text-center text-sm text-white">
            Disclaimer: ProExamPals.com is a reputable platform offering comprehensive online classes, courses, exam assistance, and homework help to students globally. As a registered and trustworthy company, we diligently adhere to our well-defined policies, ensuring utmost confidentiality is maintained at all times.
            </p>
        </div>
        <p className="text-center text-white">COPYRIGHT © {date.getFullYear()} | ALL RIGHTS RESERVED.</p>
	</div>
  );
};

export default Footer;