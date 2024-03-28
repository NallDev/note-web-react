import React from "react"
import { Link } from "react-router-dom"
import { getAccessToken, putAccessToken } from "../utils/api"
import { useAppContext } from "../context/AppContext"

function Navigation() {
    const { updateToken, theme, toggleTheme, toggleLanguage } = useAppContext()
    const onLogout = () => {
        updateToken("")
    }

    return (
        <nav>
            <ul className="flex flex-row space-x-8">
                <li>
                    <img src="/images/translate.svg" alt="translate" className="cursor-pointer dark:filter dark:invert" onClick={toggleLanguage} />
                </li>
                <li>
                    <img
                        src={theme === "dark" ? "/images/light.svg" : "/images/dark.svg"}
                        alt="theme-mode"
                        className="cursor-pointer dark:filter dark:invert"
                        onClick={toggleTheme}
                    />
                </li>
                {getAccessToken() && (
                    <>
                        <li>
                            <Link to="/">
                                <img src="/images/home.svg" alt="home" className="dark:filter dark:invert" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/archive">
                                <img src="/images/archive.svg" alt="archive" className="dark:filter dark:invert" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/add">
                                <img src="/images/add.svg" alt="add" className="dark:filter dark:invert" />
                            </Link>
                        </li>
                        <li>
                            <img src="/images/logout.svg" alt="logout" className="cursor-pointer dark:filter dark:invert" onClick={onLogout} />
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navigation
