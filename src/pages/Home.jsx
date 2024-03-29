import React, { useState, useEffect } from "react"
import InputText from "../components/InputText"
import NoteList from "../components/NoteList"
import { useSearchParams } from "react-router-dom"
import Loading from "../components/Loading"
import { getActiveNotes } from "../utils/api"
import { useAppContext } from "../context/AppContext"
import { EnSearch, IdSearch } from "../utils/constant"

function Home() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState(searchParams.get("query") || "")
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { language } = useAppContext()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const { error, data } = await getActiveNotes()
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

    function handleQueryChange(event) {
        const newQuery = event.target.value
        setQuery(newQuery)
        changeQueryParams(newQuery)
    }

    function changeQueryParams(newQuery) {
        setSearchParams({ query: newQuery })
    }

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))

    if (isLoading) {
        return <Loading isLoading={isLoading} />
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-900">
                <InputText onQueryChange={handleQueryChange} query={query} placeholder={language === "en" ? EnSearch : IdSearch} />
                <NoteList notes={filteredNotes} />
            </div>
        </>
    )
}

export default Home
