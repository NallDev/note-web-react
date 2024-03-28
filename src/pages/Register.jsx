import React, { useState } from "react"
import InputText from "../components/InputText"
import useInput from "../hooks/UseInput"
import Button from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import { register } from "../utils/api"

function Register() {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [name, onNameChange] = useInput()
    const [email, onEmailChange] = useInput()
    const [password, onPasswordChange] = useInput()
    const [confirmPassword, onConfirmPasswordChange] = useInput()

    const handleRegisterClick = async () => {
        if (password !== confirmPassword) {
            alert("Password and confirm password do not match.")
            return
        }

        setIsSubmitting(true)
        try {
            const { error } = await register({ name, email, password })
            if (!error) {
                alert("Registration successful!")
                navigate("/")
            }
        } catch (error) {
            alert("An error occurred during registration.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Loading isLoading={isSubmitting} />
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" style={{ maxWidth: "100%", width: "400px", borderRadius: "12px" }}>
                    <h1 className="text-xl font-bold mb-4 text-center dark:text-white">Register</h1>
                    <InputText onQueryChange={onNameChange} query={name} placeholder="Name" />
                    <div className="mt-2" />
                    <InputText onQueryChange={onEmailChange} query={email} placeholder="Email" type="email" />
                    <div className="mt-2" />
                    <InputText onQueryChange={onPasswordChange} query={password} placeholder="Password" type="password" />
                    <div className="mt-2" />
                    <InputText onQueryChange={onConfirmPasswordChange} query={confirmPassword} placeholder="Confirm Password" type="password" />
                    <Button children="Register" variant="submit" onClick={handleRegisterClick} />
                    <p className="mt-4 text-center dark:text-gray-300">
                        Don't have an account?
                        <Link to="/">
                            <span className="text-blue-600 dark:text-blue-400 cursor-pointer"> Login</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register
