import GlobalStyle, { lightTheme, darkTheme } from "../styles/GlobalStyle"
import { ThemeProvider } from 'styled-components'
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Discover from '../components/Discover'
import Video from '../components/Video'
import Contact from '../components/Contact'
import Experience from "../components/Experience"
import Places from "../components/Places"

import { useDarkMode } from '../styles/useDarkMode'

export default function Home() {

  // # Custom Hook
  const [theme, toggleTheme] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Layout theme={theme} toggleTheme={toggleTheme}>
          <GlobalStyle />
          <Hero />
          <About />
          <Discover />
          <Experience />
          <Video />
          <Places />
          <Contact />
        </Layout>
      </ThemeProvider>
    </>
  )
}
