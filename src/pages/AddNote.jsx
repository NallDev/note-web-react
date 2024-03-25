import React from "react"
import { NoteForm } from "../components/note_form"
import { useNavigate } from "react-router-dom"

function AddNoteWrapper(props) {
    let navigate = useNavigate()

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
                <NoteForm
                    onTitleChange={this.onTitleChangeEventHandler}
                    onDescriptionChange={this.onDescriptionChangeEventHandler}
                    onSubmit={(event) => {
                        event.preventDefault()
                        console.log("THIS IS RUN")
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

export default AddNoteWrapper
