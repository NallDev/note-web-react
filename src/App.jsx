import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/home"
import ArchiveNotes from "./pages/ArchiveNotes"
import DetailNote from "./pages/DetailNote"
import AddNote from "./pages/AddNote"
import NotFound from "./pages/Notfound"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useAppContext } from "./context/AppContext"
import { EnNoteApp, IdNoteApp } from "./utils/constant"

function App() {
    const { token, theme, language } = useAppContext()

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    if (!token) {
        return (
            <div className="app-container bg-gray-100 dark:bg-gray-900">
                <header className="flex flex-row justify-around pt-8">
                    <h1 className="font-black text-gray-900 dark:text-white">{language === "en" ? EnNoteApp : IdNoteApp}</h1>
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route path="/*" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        )
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-900 h-screen">
            <header className="flex flex-row justify-around pt-8">
                <h1 className="font-black text-gray-900 dark:text-white">{language === "en" ? EnNoteApp : IdNoteApp}</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/archive" element={<ArchiveNotes />} />
                    <Route path="/add" element={<AddNote />} />
                    <Route path="/detail/:id" element={<DetailNote />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
