import React, { useState } from "react"
import InputText from "../components/InputText"
import useInput from "../hooks/UseInput"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { login } from "../utils/api"
import Loading from "../components/Loading"
import { useAppContext } from "../context/AppContext"
import { EnDontHaveAccount, EnLogin, EnPassword, EnRegister, IdDontHaveAccount, IdLogin, IdPassword, IdRegister } from "../utils/constant"

function Login() {
    const { updateToken, language } = useAppContext()
    const [email, onEmailChange] = useInput()
    const [password, onPasswordChange] = useInput()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleLoginClick = async () => {
        setIsSubmitting(true)
        try {
            const { error, data } = await login({ email, password })
            if (!error) {
                alert("Login successful!")
                updateToken(data.accessToken)
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
            <div className="flex h-screen flex-col items-center justify-center">
                <div
                    className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
                    style={{ maxWidth: "100%", width: "400px", borderRadius: "12px" }}>
                    <h1 className="mb-4 text-center text-xl font-bold dark:text-white">{language === "en" ? EnLogin : IdLogin}</h1>
                    <InputText onQueryChange={onEmailChange} query={email} placeholder="Email" type="email" />
                    <div className="mt-2" />
                    <InputText
                        onQueryChange={onPasswordChange}
                        query={password}
                        placeholder={language === "en" ? EnPassword : IdPassword}
                        type="password"
                    />
                    <Button children={language === "en" ? EnLogin : IdLogin} variant="submit" onClick={handleLoginClick} />
                    <p className="mt-4 text-center dark:text-gray-300">
                        {language === "en" ? EnDontHaveAccount : IdDontHaveAccount}
                        <Link to="/register">
                            <span className="cursor-pointer text-blue-600 dark:text-blue-400"> {language === "en" ? EnRegister : IdRegister}</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
