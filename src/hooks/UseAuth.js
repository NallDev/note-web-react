import { useState, useEffect } from "react"

function UseAuth() {
    const [authedUser, setAuthedUser] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            setAuthedUser(true)
        }
    }, [])

    return [authedUser, setAuthedUser]
}

export default UseAuth
