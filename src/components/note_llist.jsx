import React from "react"
import { NoteCard } from "./note_card"

export const NoteList = ({ notes, onDelete, onArchive }) => {
    if (!notes || notes.length === 0) {
        return <p className="text-gray-700 mt-8">Empty</p>
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
