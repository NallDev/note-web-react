import React from "react"
import { SearchBar } from "../components/search_bar"
import { NoteList } from "../components/note_llist"
import { useSearchParams } from "react-router-dom"

function HomePageWrapper({ notes }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query") || ""

    function changeQueryParams(newQuery) {
        setSearchParams({ query: newQuery })
    }

    return <Home defaultQuery={query} onQueryChange={changeQueryParams} notes={notes} />
}

class Home extends React.Component {
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
                <NoteList notes={this.props.notes.filter((note) => note.title.toLowerCase().includes(this.state.query.toLowerCase()))} />
            </div>
        )
    }
}

export default HomePageWrapper
