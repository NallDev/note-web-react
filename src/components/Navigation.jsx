import React from "react"
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav>
            <ul className="flex flex-row space-x-8">
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
            </ul>
        </nav>
    )
}

export default Navigation
