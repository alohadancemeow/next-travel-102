import { useState, useEffect } from 'react'

export const useDarkMode = () => {
    const [theme, setTheme] = useState()

    // # Set theme to localStorage
    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleTheme = () => {
        theme === 'light'
            ? setMode('dark')
            : setMode('light')
    }

    // # Get theme from localStorage
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme
            ? setTheme(localTheme)
            : setMode('light')
    }, [])

    return [theme, toggleTheme]
}