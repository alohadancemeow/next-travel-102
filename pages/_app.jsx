import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="my-script-aos" >
        AOS.init();
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
