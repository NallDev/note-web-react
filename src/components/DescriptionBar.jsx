import React from "react"
import PropTypes from "prop-types"

function DescriptionBar({ onChange, value }) {
    return (
        <textarea
            className="w-full p-1 border border-gray-300 rounded-md text-sm max-w-md mt-2"
            placeholder="Description..."
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
