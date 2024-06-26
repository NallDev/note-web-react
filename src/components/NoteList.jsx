import React from "react"
import NoteCard from "./NoteCard"
import Empty from "./Empty"
import PropTypes from "prop-types"

function NoteList({ notes }) {
    if (!notes || notes.length === 0) {
        return <Empty />
    }

    return (
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {notes.map((note) => (
                <NoteCard key={note.id} id={note.id} title={note.title} date={note.createdAt} description={note.body} />
            ))}
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            archived: PropTypes.bool.isRequired,
        }),
    ).isRequired,
}

export default NoteList
