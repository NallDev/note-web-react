import React from "react"
import { useAppContext } from "../context/AppContext"
import { EnEmpty, IdEmpty } from "../utils/constant"

function Empty() {
    const { language } = useAppContext()
    return <p className="text-gray-700 dark:text-white mt-8 text-center">{language === "en" ? EnEmpty : IdEmpty}</p>
}

export default Empty
