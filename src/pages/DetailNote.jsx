import React, { useEffect, useState } from "react"
import { showFormattedDate } from "../utils"
import { useParams, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Empty from "../components/Empty"
import PropTypes from "prop-types"
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api"
import Loading from "../components/Loading"

function Detail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [note, setNote] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleArchiveClick = async () => {
        setIsLoading(true)
        try {
            if (note.archived) {
                const {error} = await unarchiveNote(id)
                if(!error) {
                    navigate("/")
                }
            } else {
                const {error} = await archiveNote(id)
                if(!error) {
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
            const {error} = await deleteNote(id)
            if(!error) {
                
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
                const {error, data} = await getNote(id)
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

    if (!note) {
        return <Empty />
    }

    return (
        <>
        <Loading isLoading={isLoading}/>    
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
        </>
    )
}

export default Detail
