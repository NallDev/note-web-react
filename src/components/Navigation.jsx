import React from "react"
import { Link } from "react-router-dom"
import { getAccessToken } from "../utils/api"

function Navigation() {
    return (
        <nav>
            <ul className="flex flex-row space-x-8">
                <li>
                    <img src="/images/translate.svg" alt="translate" style={{ cursor: "pointer" }} />
                </li>
                <li>
                    <img src="/images/dark.svg" alt="theme-mode" style={{ cursor: "pointer" }} />
                </li>
                {getAccessToken() && (
                    <>
                        <li>
                            <Link to="/">
                                <img src="/images/home.svg" alt="home" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/archive">
                                <img src="/images/archive.svg" alt="archive" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/add">
                                <img src="/images/add.svg" alt="add" />
                            </Link>
                        </li>
                        <li>
                            <a href="#" onClick={() => setAuthedUser(null)}>
                                <img src="/images/logout.svg" alt="logout" />
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navigation
