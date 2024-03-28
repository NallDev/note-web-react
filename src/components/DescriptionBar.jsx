import React from "react"
import PropTypes from "prop-types"
import { EnDescription, IdDescription } from "../utils/constant"
import { useAppContext } from "../context/AppContext"

function DescriptionBar({ onChange, value }) {
    const { language } = useAppContext()
    return (
        <textarea
            className="w-full p-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm max-w-md mt-2 dark:bg-gray-700 dark:text-gray-300"
            placeholder={language === "en" ? EnDescription : IdDescription}
            rows={4}
            value={value}
            onChange={onChange}
        />
    )
}

DescriptionBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default DescriptionBar
