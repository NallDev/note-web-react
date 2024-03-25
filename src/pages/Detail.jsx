import React from "react"
import { showFormattedDate } from "../utils"
import { getNote } from "../utils/local-data"
import { useParams } from "react-router-dom"
import { Button } from "../components/button"

function DetailPageWrapper() {
    const { id } = useParams()

    return <Detail id={id} />
}

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: getNote(props.id),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id)
        this.setState({ notes })
    }

    onArchiveHandler(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)),
        }))
    }

    render() {
        return (
            <div className="border border-gray-300 rounded-md p-4 flex flex-col h-full">
                <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-black break-words">{this.state.note.title}</h3>
                    <p className="text-base mb-2 text-gray-500 break-words">{showFormattedDate(this.state.note.createdAt)}</p>
                    <p className="text-base mb-2 text-gray-700 break-words">{this.state.note.body}</p>
                </div>
                <div className="flex gap-2 mt-2">
                    <Button variant="delete" onClick={this.onDeleteHandler}>
                        Delete
                    </Button>
                    <Button variant="archive" onClick={this.onArchiveHandler}>
                        {this.state.note.archived ? "Unarchive" : "Archive"}
                    </Button>
                </div>
            </div>
        )
    }
}

export default DetailPageWrapper
