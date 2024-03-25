import React from "react"
import { showFormattedDate } from "../utils"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function NoteCard({ id, title, date, description }) {
    return (
        <Link to={`/detail/${id}`}>
            <div className="border border-gray-300 rounded-md p-4 flex flex-col h-full hover:bg-slate-200">
                <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-black break-words">{title}</h3>
                    <p className="text-base mb-2 text-gray-500 break-words">{showFormattedDate(date)}</p>
                    <p className="text-base mb-2 text-gray-700 break-words">{description}</p>
                </div>
            </div>
        </Link>
    )
}

NoteCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteCard
