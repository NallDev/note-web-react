import { useAppContext } from "../context/AppContext"

const showFormattedDate = (date, language) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    return new Date(date).toLocaleDateString(language === "en" ? "en-US" : "id-ID", options)
}

export { showFormattedDate }
