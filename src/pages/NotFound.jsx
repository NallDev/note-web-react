import React from "react"
import { useAppContext } from "../context/AppContext"
import { EnNotFound, IdNotFound } from "../utils/constant"

function NotFound() {
    const { language } = useAppContext()
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-gray-700 dark:text-white">{language === "en" ? EnNotFound : IdNotFound}</p>
        </div>
    )
}

export default NotFound
