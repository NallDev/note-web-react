import React, { useState } from "react"
import InputText from "../components/InputText"
import useInput from "../hooks/UseInput"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { login, putAccessToken } from "../utils/api"
import Loading from "../components/Loading"
import useLocalStorage from "../hooks/UseLocalStorage"
import { TokenKey } from "../utils/constant"

function Login() {
    const [email, onEmailChange] = useInput()
    const [password, onPasswordChange] = useInput()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleLoginClick = async () => {
        setIsSubmitting(true)
        try {
            const { error, data } = await login({ email, password })
            if (!error) {
                alert("Login successful!")
                putAccessToken(data.accessToken)
                console.log(data.accessToken)
            }
        } catch (error) {
            alert("An error occurred during login.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Loading isLoading={isSubmitting} />
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg" style={{ maxWidth: "100%", width: "400px", borderRadius: "12px" }}>
                    <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
                    <InputText onQueryChange={onEmailChange} query={email} placeholder="Email" type="email" />
                    <div className="mt-2" />
                    <InputText onQueryChange={onPasswordChange} query={password} placeholder="Password" type="password" />
                    <Button children="Login" variant="submit" onClick={handleLoginClick} />
                    <p className="mt-4 text-center">
                        Don't have an account?
                        <Link to="/register">
                            <span className="text-blue-600 cursor-pointer"> Register</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
