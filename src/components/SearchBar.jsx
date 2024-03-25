import React from "react"
import PropTypes from "prop-types"

function SearchBar({ onQueryChange, query }) {
    return (
        <input
            onChange={onQueryChange}
            value={query}
            type="text"
            className="w-full p-1 border border-gray-300 rounded-md text-sm max-w-md"
            placeholder="Search..."
        />
    )
}

SearchBar.propTypes = {
    onQueryChange: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
}

export default SearchBar
