import React from "react"
import { TailSpin } from "react-loader-spinner"
import PropTypes from "prop-types"

function Loading({ isLoading }) {
    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
    )
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

export default Loading
