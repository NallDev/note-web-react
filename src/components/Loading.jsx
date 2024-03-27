import React from "react"
import { TailSpin } from "react-loader-spinner"

const Loading = ({ isLoading }) => {
    if (!isLoading) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
    )
}

export default Loading
