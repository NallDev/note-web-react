import React from "react"
import { Button } from "./button"
import { showFormattedDate } from "../utils"

export const NoteCard = ({ title, date, description, archived, onDelete, onArchive }) => (
    <div className="border border-gray-300 rounded-md p-4 flex flex-col h-full">
        <div className="flex-grow">
            <h3 className="text-lg font-bold mb-2 text-black break-words">{title}</h3>
            <p className="text-base mb-2 text-gray-500 break-words">{showFormattedDate(date)}</p>
            <p className="text-base mb-2 text-gray-700 break-words">{description}</p>
        </div>
        <div className="flex gap-2 mt-2">
            <Button variant="delete" onClick={onDelete}>
                Delete
            </Button>
            <Button variant="archive" onClick={onArchive}>
                {archived ? "Unarchive" : "Archive"}
            </Button>
        </div>
    </div>
)
