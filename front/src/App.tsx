import { useRef } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Home } from "./components/home/home.tsx";
import { MyNavbar } from "./components/layouts/navbar.tsx";
import { Footer } from "./components/layouts/footer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <MyNavbar homeRef={homeRef} />
      <div ref={homeRef}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
