import React, { useEffect, useState } from "react"
import { showFormattedDate } from "../utils"
import { useParams, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Empty from "../components/Empty"
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api"
import Loading from "../components/Loading"
import { useAppContext } from "../context/AppContext"
import { EnArchive, EnDelete, IdArchive, IdDelete, IdUnArchive, EnUnArchive } from "../utils/constant"

function Detail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [note, setNote] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { language } = useAppContext()

    const handleArchiveClick = async () => {
        setIsLoading(true)
        try {
            if (note.archived) {
                const { error } = await unarchiveNote(id)
                if (!error) {
                    navigate("/")
                }
            } else {
                const { error } = await archiveNote(id)
                if (!error) {
                    navigate("/")
                }
            }
        } catch (error) {
            alert("An expected error when process data")
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeleteClick = async () => {
        setIsLoading(true)
        try {
            const { error } = await deleteNote(id)
            if (!error) {
                navigate("/")
            }
        } catch (error) {
            alert("An expected error when delete data")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const { error, data } = await getNote(id)
                if (!error) {
                    setNote(data)
                }
            } catch (error) {
                alert("An expected error when fetching data")
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    if (isLoading) {
        return <Loading isLoading={isLoading} />
    }

    if (note.length === 0) {
        return <Empty />
    }

    return (
        <>
            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 flex flex-col h-full m-8 max-md: dark:bg-gray-800">
                <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-black dark:text-white break-words">{note.title}</h3>
                    <p className="text-base mb-2 text-gray-500 dark:text-gray-400 break-words">{showFormattedDate(note.createdAt, language)}</p>
                    <p className="text-base mb-2 text-gray-700 dark:text-gray-300 break-words">{note.body}</p>
                </div>
                <div className="flex gap-2 mt-2">
                    <Button variant="delete" onClick={handleDeleteClick}>
                        {language === "en" ? EnDelete : IdDelete}
                    </Button>
                    <Button variant="archive" onClick={handleArchiveClick}>
                        {note.archived ? (language === "en" ? EnUnArchive : IdUnArchive) : language === "en" ? EnArchive : IdArchive}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Detail
