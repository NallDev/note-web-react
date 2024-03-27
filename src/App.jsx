import React from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/home"
import ArchiveNotes from "./pages/ArchiveNotes"
import DetailNote from "./pages/DetailNote"
import { getAllNotes } from "./utils/local-data"
import AddNote from "./pages/AddNote"
import NotFound from "./pages/Notfound"
import Login from "./pages/Login"
import Register from "./pages/Register"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getAllNotes(),
        }

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
    }

    onSubmitEventHandler({ title, description }) {
        if (title && description) {
            const newNote = {
                id: `${+new Date()}`,
                title: title,
                body: description,
                createdAt: new Date().toISOString(),
                archived: false,
            }
            this.setState((prevState) => ({
                notes: [...prevState.notes, newNote],
            }))
        } else {
            alert("Title and description are required.")
        }
    }

    onDeleteHandler({ id }) {
        const notes = this.state.notes.filter((note) => note.id !== id)
        this.setState({ notes })
    }

    onArchiveHandler({ id }) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)),
        }))
    }

    render() {
        return (
            <>
                <header className="flex flex-row justify-around mt-8">
                    <h1 className="font-black ">Note App</h1>
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        {/* <Route path="/" element={<Home notes={this.state.notes} />} /> */}
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/archive" element={<ArchiveNotes notes={this.state.notes} />} />
                        <Route path="/add" element={<AddNote addNote={this.onSubmitEventHandler} />} />
                        <Route
                            path="/detail/:id"
                            element={<DetailNote notes={this.state.notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </>
        )
    }
}

export default App
