import React from "react"

export const DescriptionBar = ({ onChange, value }) => (
    <textarea
        className="w-full p-1 border border-gray-300 rounded-md text-sm max-w-md mt-2"
        placeholder="Description..."
        rows={4}
        value={value}
        onChange={onChange}
    />
)
