import React from "react"

export const TitleInput = ({ onChange, value, maxLength }) => {
    const remaining = maxLength - value.length
    const counterColor = remaining === 0 ? "text-red-500" : "text-black"

    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Title..."
                className="w-full p-1 border border-gray-300 rounded-md text-sm pr-16"
                value={value}
                onChange={onChange}
            />
            <span className={`absolute right-3 top-1 ${counterColor} text-sm`}>
                {remaining}/{maxLength}
            </span>
        </div>
    )
}
