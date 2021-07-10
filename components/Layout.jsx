import React from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = ({ title, keywords, description, children, theme, toggleTheme }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Layout

// # Set default props
Layout.defaultProps = {
    title: 'Mukdahan Travel',
    keywords: 'Have a good trip in Mukdahan, Mudahan',
    description: 'The wonderful places in Mukdahan'
}
