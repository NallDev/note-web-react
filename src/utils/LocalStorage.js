function LocalStorage(key) {
    const getData = localStorage.getItem(key)
    const setData = (newData) => {
        localStorage.setItem(key, newData)
    }

    return [getData, setData]
}

export default LocalStorage
