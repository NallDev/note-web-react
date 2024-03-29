import React from "react"
import PropTypes from "prop-types"

function InputText({ onQueryChange, query, placeholder, type = "text" }) {
    return (
        <input
            onChange={onQueryChange}
            value={query}
            type={type}
            className="w-full max-w-md rounded-md border border-gray-300 p-1 text-sm placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
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
