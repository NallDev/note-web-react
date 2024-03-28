import React from "react"
import PropTypes from "prop-types"

function TitleInput({ onChange, value, maxLength }) {
    const remaining = maxLength - value.length;
    const counterColor = remaining === 0 ? "text-red-500" : "text-gray-900 dark:text-white";

    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Title..."
                className="w-full p-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm pr-16 dark:bg-gray-700 dark:text-gray-300"
                value={value}
                onChange={onChange}
                maxLength={maxLength}
            />
            <span className={`absolute right-3 top-1 ${counterColor} text-sm`}>
                {remaining}/{maxLength}
            </span>
        </div>
    );
}

TitleInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
}

export default TitleInput
