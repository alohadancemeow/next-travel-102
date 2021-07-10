import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        strategy="beforeInteractive"
      >
      </Script>
      <Script>
        AOS.init();
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
