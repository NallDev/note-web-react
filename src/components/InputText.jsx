import React from "react"
import PropTypes from "prop-types"

function InputText({ onQueryChange, query, placeholder, type = "text" }) {
    return (
        <input
            onChange={onQueryChange}
            value={query}
            type={type}
            className="w-full p-1 border border-gray-300 rounded-md text-sm max-w-md placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
            placeholder={placeholder}
        />
    )
}

InputText.propTypes = {
    onQueryChange: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default InputText
