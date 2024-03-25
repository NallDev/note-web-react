import React from "react"
import TitleInput from "./TitleInput"
import Button from "./Button"
import DescriptionBar from "./DescriptionBar"
import PropTypes from "prop-types"

function NoteForm({ onTitleChange, onDescriptionChange, onSubmit, title, description }) {
    return (
        <form className="flex flex-col items-center" onSubmit={onSubmit}>
            <TitleInput value={title} onChange={onTitleChange} maxLength={50} />
            <DescriptionBar value={description} onChange={onDescriptionChange} />
            <Button variant="submit" type="submit">
                Submit
            </Button>
        </form>
    )
}

NoteForm.propTypes = {
    onTitleChange: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default NoteForm
