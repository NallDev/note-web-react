import React from "react"

export const SearchBar = ({ onQueryChange, query }) => (
    <input
        onChange={onQueryChange}
        value={query}
        type="text"
        className="w-full p-1 border border-gray-300 rounded-md text-sm max-w-md"
        placeholder="Search..."
    />
)
