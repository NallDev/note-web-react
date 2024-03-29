import React from "react"
import { useAppContext } from "../context/AppContext"
import { EnEmpty, IdEmpty } from "../utils/constant"

function Empty() {
    const { language } = useAppContext()
    return <p className="mt-8 text-center text-gray-700 dark:text-white">{language === "en" ? EnEmpty : IdEmpty}</p>
}

export default Empty
