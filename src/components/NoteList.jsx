import React from "react"
import NoteCard from "./NoteCard"
import Empty from "./Empty"
import PropTypes from "prop-types"

function NoteList({ notes, onDelete, onArchive }) {
    if (!notes || notes.length === 0) {
        return <Empty />
    }

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {notes.map((note) => (
                <NoteCard
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    date={note.createdAt}
                    description={note.body}
                    archived={note.archived}
                    onDelete={() => onDelete(note.id)}
                    onArchive={() => onArchive(note.id)}
                />
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
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
}

export default NoteList
