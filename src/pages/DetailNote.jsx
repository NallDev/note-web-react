import React from "react"
import { showFormattedDate } from "../utils"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "../components/button"

function DetailPageWrapper({ notes, onArchive, onDelete }) {
    const navigate = useNavigate() // useNavigate hook for redirection
    const { id } = useParams()
    const note = notes.find((note) => note.id === id)

    const handleArchiveClick = () => {
        onArchive({ id })
        navigate("/") // Redirect to home after archiving
    }

    const handleDeleteClick = () => {
        onDelete({ id })
        navigate("/") // Redirect to home after deletion
    }

    // Ensure `note` is not undefined before trying to render its properties
    if (!note) {
        // Optionally, navigate to a 'not found' page or show a message
        return <div>Note not found</div>
    }

    return (
        <div className="border border-gray-300 rounded-md p-4 flex flex-col h-full m-8 max-md:">
            <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2 text-black break-words">{note.title}</h3>
                <p className="text-base mb-2 text-gray-500 break-words">{showFormattedDate(note.createdAt)}</p>
                <p className="text-base mb-2 text-gray-700 break-words">{note.body}</p>
            </div>
            <div className="flex gap-2 mt-2">
                <Button variant="delete" onClick={handleDeleteClick}>
                    Delete
                </Button>
                <Button variant="archive" onClick={handleArchiveClick}>
                    {note.archived ? "Unarchive" : "Archive"}
                </Button>
            </div>
        </div>
    )
}

export default DetailPageWrapper
