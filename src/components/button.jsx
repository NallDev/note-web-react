import React from "react"
import PropTypes from "prop-types"

function Button({ children, variant, ...props }) {
    let className = "font-bold py-2 px-4 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 "

    switch (variant) {
        case "submit":
            className += "bg-blue-500 hover:bg-blue-700 text-white "
            break
        case "delete":
            className += "text-red-500 border border-red-500 hover:bg-red-100"
            break
        case "archive":
            className += "text-orange-300 border border-orange-300 hover:bg-orange-100 "
            break
        default:
            className += "bg-blue-500 hover:bg-blue-700 text-white "
    }

    return (
        <button className={className + (variant === "submit" ? "w-full max-w-md mt-4" : "")} {...props}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["submit", "delete", "archive"]).isRequired,
}

export default Button
