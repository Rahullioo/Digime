import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pagess/Dashboard"
import Login from "./components/Login"
import Users from "./pagess/Users"
import Animes from "./pagess/Animes"
import AddUser from "./pagess/AddUser"
import EditUser from "./pagess/EditUser"
import AddAnime from "./pagess/AddAnime"
import EditAnime from "./pagess/EditAnime"
import Genres from "./pagess/Genres"
import AddGenre from "./pagess/AddGenre"
import EditGenre from "./pagess/EditGenre"
import Episodes from "./pagess/Episodes"
import AddEpisode from "./pagess/AddEpisode"
import EditEpisode from "./pagess/EditEpisode"

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/users/add" element={<AddUser/>} />
            <Route path="/users/edit/:id" element={<EditUser/>} />
            <Route path="/animes" element={<Animes/>} />
            <Route path="/animes/add" element={<AddAnime/>} />
            <Route path="/animes/edit/:id" element={<EditAnime/>} />
            <Route path="/genres" element={<Genres/>} />
            <Route path="/genres/add" element={<AddGenre/>} />
            <Route path="/genres/edit/:id" element={<EditGenre/>} />
            <Route path="/episodes" element={<Episodes/>} />
            <Route path="/episodes/add" element={<AddEpisode/>} />
            <Route path="/episodes/edit/:id" element={<EditEpisode/>} />
          </Routes>
        </Router>
      </div>
      
    </>
  )
}

export default App
