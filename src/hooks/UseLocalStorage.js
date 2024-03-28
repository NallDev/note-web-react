import { useState } from "react"

function useLocalStorage(key) {
    const [storedValue, setStoredValue] = useState(localStorage.getItem(key))

    const setValue = (value) => {
        try {
            setStoredValue(value)
            localStorage.setItem(key, value)
        } catch (error) {
            console.error(error)
        }
    }

    return [storedValue, setValue]
}

export default useLocalStorage
