import React from "react"
import InputText from "../components/InputText"
import NoteList from "../components/NoteList"
import { useSearchParams } from "react-router-dom"
import PropTypes from "prop-types"

function ArchivePageWrapper({ notes }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query") || ""

    function changeQueryParams(newQuery) {
        setSearchParams({ query: newQuery })
    }

    return (
        <ArchiveNotes
            defaultQuery={query}
            onQueryChange={changeQueryParams}
            notes={notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()) && note.archived)}
        />
    )
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
                <InputText onQueryChange={this.onQueryChangeEventHandler} query={this.state.query} placeholder="Search..." />
                <NoteList notes={this.props.notes} />
            </div>
        )
    }
}

ArchiveNotes.propTypes = {
    defaultQuery: PropTypes.string,
    onQueryChange: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            archived: PropTypes.bool.isRequired,
        }),
    ).isRequired,
}

export default ArchivePageWrapper
