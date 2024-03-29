import React from "react"
import PropTypes from "prop-types"

function Button({ children, variant, ...props }) {
    let className = "font-bold py-2 px-4 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 "

    switch (variant) {
        case "submit":
            className += "bg-blue-500 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-800 "
            break
        case "delete":
            className += "text-red-500 border border-red-500 hover:bg-red-100 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-200"
            break
        case "archive":
            className +=
                "text-orange-300 border border-orange-300 hover:bg-orange-100 dark:text-orange-400 dark:border-orange-400 dark:hover:bg-orange-200 "
            break
        default:
            className += "bg-blue-500 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-800 "
    }

    return (
        <button className={className + (variant === "submit" ? "mt-4 w-full max-w-md" : "")} {...props}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["submit", "delete", "archive"]).isRequired,
}

export default Button
