import React, { useState, useEffect } from "react"
import InputText from "../components/InputText"
import NoteList from "../components/NoteList"
import { useSearchParams } from "react-router-dom"
import PropTypes from "prop-types"
import Loading from "../components/Loading"
import { getArchivedNotes } from "../utils/api"

function ArchiveNotes() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState(searchParams.get("query") || "")
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const { error, data } = await getArchivedNotes()
                if (!error) {
                    setNotes(data)
                }
            } catch (error) {
                alert("An expected error when fetching data")
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleQueryChange = (event) => {
        const newQuery = event.target.value
        setQuery(newQuery)
        changeQueryParams(newQuery)
    }

    function changeQueryParams(newQuery) {
        setSearchParams({ query: newQuery })
    }

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
        <Loading isLoading={isLoading}/>
        <div className="flex flex-col items-center justify-center p-8">
            <InputText onQueryChange={handleQueryChange} query={query} placeholder="Search..." />
            <NoteList notes={filteredNotes} />
        </div>
        </>
        
    )
}

export default ArchiveNotes
