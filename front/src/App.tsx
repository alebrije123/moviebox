import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { Login } from "./components/usuario/login.tsx";
import { Home } from "./components/home/home.tsx";
import { MyNavbar } from "./components/layouts/navbar.tsx";
import { Footer } from "./components/layouts/footer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
