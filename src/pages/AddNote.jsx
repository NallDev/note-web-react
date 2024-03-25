import React from "react"
import NoteForm from "../components/NoteForm"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

function AddNoteWrapper(props) {
    const navigate = useNavigate()

    const handleAddNote = (note) => {
        props.addNote(note)
        navigate("/")
    }

    return <AddNote {...props} addNote={handleAddNote} />
}

class AddNote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onDescriptionChangeEventHandler = this.onDescriptionChangeEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        const newTitle = event.target.value
        if (newTitle.length <= 50) {
            this.setState({ title: newTitle })
        }
    }

    onDescriptionChangeEventHandler(event) {
        this.setState({ description: event.target.value })
    }

    render() {
        return (
            <>
                <h1 className="text-2xl font-black p-8 text-black text-center">Add Note</h1>
                <NoteForm
                    onTitleChange={this.onTitleChangeEventHandler}
                    onDescriptionChange={this.onDescriptionChangeEventHandler}
                    onSubmit={(event) => {
                        event.preventDefault()
                        this.props.addNote({
                            title: this.state.title,
                            description: this.state.description,
                        })
                    }}
                    title={this.state.title}
                    description={this.state.description}
                />
            </>
        )
    }
}

AddNote.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default AddNoteWrapper
