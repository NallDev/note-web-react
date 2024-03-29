import React, { createContext, useContext, useState } from "react"
import { getAccessToken, putAccessToken } from "../utils/api"
import { LanguageKey, ThemeKey } from "../utils/constant"

const AppContext = createContext()

export function useAppContext() {
    return useContext(AppContext)
}

export function AppProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem(ThemeKey) || "light")

    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem(ThemeKey, newTheme)
    }

    const [token, setToken] = useState(getAccessToken())

    function updateToken(newToken) {
        putAccessToken(newToken)
        setToken(newToken)
    }

    const [language, setLanguage] = useState(localStorage.getItem(LanguageKey) || "en")

    function toggleLanguage() {
        const newLanguage = language === "en" ? "id" : "en"
        setLanguage(newLanguage)
        localStorage.setItem(LanguageKey, newLanguage)
    }

    return (
        <AppContext.Provider
            value={{
                theme,
                toggleTheme,
                token,
                updateToken,
                language,
                toggleLanguage,
            }}>
            {children}
        </AppContext.Provider>
    )
}
