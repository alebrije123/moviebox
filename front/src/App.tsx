import { useRef } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Home } from "./components/home/home.tsx";
import { MyNavbar } from "./components/layouts/navbar.tsx";
import { Footer } from "./components/layouts/footer.tsx";
import { CardPublicacion } from "./components/pelicula/publicacion.tsx";
import { CardPelicula } from "./components/pelicula/pelicula.tsx";
import { CardResenias } from "./components/pelicula/resenias.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Router>
        <MyNavbar homeRef={homeRef} />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publicaciones" element={<CardPublicacion />} />
          <Route path="/peliculas" element={<CardPelicula />} />
          <Route path="/resenias" element={<CardResenias />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
