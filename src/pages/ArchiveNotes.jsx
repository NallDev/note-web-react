import React from "react"
import { SearchBar } from "../components/search_bar"
import { NoteList } from "../components/note_llist"
import { useSearchParams } from "react-router-dom"
import { getArchivedNotes } from "../utils/local-data"

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query") || ""

    function changeQueryParams(newQuery) {
        setSearchParams({ query: newQuery })
    }

    return <ArchiveNotes defaultQuery={query} onQueryChange={changeQueryParams} />
}

class ArchiveNotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: props.defaultQuery,
        }
    }

    onQueryChangeEventHandler = (event) => {
        const newQuery = event.target.value
        this.setState({ query: newQuery })
        this.props.onQueryChange(newQuery)
    }

    render() {
        return (
            <div className="flex flex-col items-center justify-center p-8">
                <SearchBar onQueryChange={this.onQueryChangeEventHandler} query={this.state.query} />
                <NoteList notes={this.props.notes.filter((note) => note.title.toLocaleLowerCase().includes(this.state.query.toLowerCase()))} />
            </div>
        )
    }
}

export default ArchivePageWrapper
