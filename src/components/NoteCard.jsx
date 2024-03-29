import React from "react"
import { showFormattedDate } from "../utils"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useAppContext } from "../context/AppContext"

function NoteCard({ id, title, date, description }) {
    const { language } = useAppContext()
    return (
        <Link to={`/detail/${id}`} className="block">
            <div className="flex h-full flex-col rounded-md border border-gray-300 p-4 hover:bg-slate-200 dark:border-gray-600 dark:hover:bg-gray-600">
                <div className="flex-grow">
                    <h3 className="mb-2 break-words text-lg font-bold text-black dark:text-white">{title}</h3>
                    <p className="mb-2 break-words text-base text-gray-500 dark:text-gray-400">{showFormattedDate(date, language)}</p>
                    <p className="mb-2 break-words text-base text-gray-700 dark:text-gray-300">{description}</p>
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
}

export default NoteCard
