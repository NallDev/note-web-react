import React from "react"
import { TitleInput } from "./title_input"
import { Button } from "./button"
import { DescriptionBar } from "./description_bar"

export const NoteForm = ({ onTitleChange, onDescriptionChange, onSubmit, title, description }) => (
    <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <TitleInput value={title} onChange={onTitleChange} maxLength={50} />
        <DescriptionBar value={description} onChange={onDescriptionChange} />
        <Button variant="submit" type="submit">
            Submit
        </Button>
    </form>
)
