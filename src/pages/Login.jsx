import React from "react"
import InputText from "../components/InputText"
import useInput from "../utils/UseInput"
import Button from "../components/Button"
import { Link } from "react-router-dom"

function Login() {
    const [email, onEmailChange] = useInput()
    const [password, onPasswordChange] = useInput()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ maxWidth: "100%", width: "400px", borderRadius: "12px" }}>
                <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
                <InputText onQueryChange={onEmailChange} query={email} placeholder="Email" type="email" />
                <div className="mt-2" />
                <InputText onQueryChange={onPasswordChange} query={password} placeholder="Password" type="password" />
                <Button children="Login" variant="submit" />
                <p className="mt-4 text-center">
                    Don't have an account?
                    <Link to="/register">
                        <span className="text-blue-600 cursor-pointer"> Register</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
