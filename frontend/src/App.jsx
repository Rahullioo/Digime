import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Animes from "./pages/Animes"
import AnimeById from "./pages/AnimeById"
import Stream from "./pages/Stream"
import Genres from "./pages/Genres"
import GenreById from "./pages/GenreById"

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/animes" element={<Animes/>} />
            <Route path="/animes/:id" element={<AnimeById/>} />
            <Route path="/:title/episodes/:id" element={<Stream/>} />
            <Route path="/genres" element={<Genres/>} />
            <Route path="/genres/:id" element={<GenreById/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
