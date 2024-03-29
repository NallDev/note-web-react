import React from "react"
import { useAppContext } from "../context/AppContext"
import { EnNotFound, IdNotFound } from "../utils/constant"

function NotFound() {
    const { language } = useAppContext()
    return (
        <div className="flex h-screen items-center justify-center">
            <p className="text-gray-700 dark:text-white">{language === "en" ? EnNotFound : IdNotFound}</p>
        </div>
    )
}

export default NotFound
