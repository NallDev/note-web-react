import React, { useState } from "react"
import NoteForm from "../components/NoteForm"
import { useNavigate } from "react-router-dom"
import useInput from "../hooks/UseInput"
import Loading from "../components/Loading"
import { addNote } from "../utils/api"
import { useAppContext } from "../context/AppContext"
import { EnAddNote, IdAddNote } from "../utils/constant"

function AddNote() {
    const navigate = useNavigate()
    const [title, onTitleChange] = useInput()
    const [body, onBodyChange] = useInput()
    const [isLoading, setIsLoading] = useState(false)
    const { language } = useAppContext()

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        if (title === "" || body === "") {
            alert("Please fill all textfield")
            setIsLoading(false)
            return
        }

        try {
            const { error } = await addNote({ title, body })
            if (!error) {
                navigate("/")
            }
        } catch (error) {
            alert(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Loading isLoading={isLoading} />
            <h1 className="p-8 text-center text-2xl font-black text-black dark:text-white">{language === "en" ? EnAddNote : IdAddNote}</h1>
            <NoteForm onTitleChange={onTitleChange} onDescriptionChange={onBodyChange} onSubmit={onSubmit} title={title} description={body} />
        </>
    )
}

export default AddNote
