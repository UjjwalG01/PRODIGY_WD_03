import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import LatestWork from "./pages/LatestWork";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Home />
        <Skills />
        <LatestWork />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
