import React from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/home"
import Archive from "./pages/Archive"
import Detail from "./pages/Detail"

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             notes: getInitialData(),
//             title: "",
//             description: "",
//             query: "",
//         }

//         this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
//         this.onDescriptionChangeEventHandler = this.onDescriptionChangeEventHandler.bind(this)
//         this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
//         this.onDeleteHandler = this.onDeleteHandler.bind(this)
//         this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this)
//         this.onArchiveHandler = this.onArchiveHandler.bind(this)
//     }

//     onTitleChangeEventHandler(event) {
//         const newTitle = event.target.value
//         if (newTitle.length <= 50) {
//             this.setState({ title: newTitle })
//         }
//     }

//     onDescriptionChangeEventHandler(event) {
//         this.setState({ description: event.target.value })
//     }

//     onSubmitEventHandler(event) {
//         event.preventDefault()
//         if (this.state.title && this.state.description) {
//             const newNote = {
//                 id: +new Date(),
//                 title: this.state.title,
//                 body: this.state.description,
//                 createdAt: new Date().toISOString(),
//                 archived: false,
//             }
//             this.setState((prevState) => ({
//                 notes: [...prevState.notes, newNote],
//                 title: "",
//                 description: "",
//             }))
//         } else {
//             alert("Title and description are required.")
//         }
//     }

//     onDeleteHandler(id) {
//         const notes = this.state.notes.filter((note) => note.id !== id)
//         this.setState({ notes })
//     }

//     onQueryChangeEventHandler(event) {
//         this.setState({ query: event.target.value })
//     }

//     onArchiveHandler(id) {
//         this.setState((prevState) => ({
//             notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)),
//         }))
//     }

//     render() {
//         return (
//             <div className="flex flex-col items-center justify-center min-h-screen p-4">
//                 <div className="w-full text-center">
//                     <h1 className="text-3xl font-bold mb-4">NOTE WEB</h1>
//                     <NoteForm
//                         onTitleChange={this.onTitleChangeEventHandler}
//                         onDescriptionChange={this.onDescriptionChangeEventHandler}
//                         onSubmit={this.onSubmitEventHandler}
//                         title={this.state.title}
//                         description={this.state.description}
//                     />
//                     <div className="border-t border-gray-400 my-8 w-full"></div>
//                     <SearchBar onQueryChange={this.onQueryChangeEventHandler} query={this.state.query} />
//                 </div>
//                 <h2 className="text-3xl font-bold my-4">Your Note</h2>
//                 <NoteList
//                     notes={this.state.notes.filter(
//                         (note) => note.title.toLowerCase().includes(this.state.query.toLowerCase()) && note.archived === false,
//                     )}
//                     onDelete={this.onDeleteHandler}
//                     onArchive={this.onArchiveHandler}
//                 />
//                 <h2 className="text-3xl font-bold my-4">Your Archive</h2>
//                 <NoteList
//                     notes={this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.query.toLowerCase()) && note.archived)}
//                     onDelete={this.onDeleteHandler}
//                     onArchive={this.onArchiveHandler}
//                 />
//             </div>
//         )
//     }
// }

function App() {
    return (
        <>
            <header className="flex flex-row justify-around mt-8">
                <h1 className="font-black ">Note App</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </main>
        </>
    )
}

export default App
