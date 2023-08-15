import {useEffect} from "react";
import Script from 'next/script';
import Head from 'next/head';
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/boxicons.min.css";
import '../styles/globals.scss';
import Popup from "../components/Popup";
import EmailPopup from "../components/EmailPopup";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {

  function isMobile() {
    return new Promise(resolve => {
      if(navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)
         || navigator.userAgent.match(/Opera Mini/i)
         || navigator.userAgent.match(/IEMobile/i)
        ) { resolve(true) } else { resolve(false) };
    });
  }

  async function hInit() {
    if(await isMobile()){
      return;
    }
  }
  
  useEffect(() => {
    const init = async () =>  {
      await hInit()
    }
    init();
  });
  return (
    <>
      <Head>
        <title>America's finest Academic Experts</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YLQTV0TJBD" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YLQTV0TJBD');
          `}
        </Script>
        <Script id="tawk-to">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/64d7d52394cf5d49dc6a05ff/1h7lhh5k0';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}</Script>
        <Layout>
			    <Popup />
          <EmailPopup />
          <Component {...pageProps} />
        </Layout>
    </>
  );
}
export default MyApp;
