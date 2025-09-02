// src/App.jsx
import { useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Achievements from "./components/achievements";
import Contact from "./components/contact";
import "./App.css";

function App() {
  // Ensure theme persists
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="home" className="section"><Hero /></section>
        <section id="about" className="section"><About /></section>
        <section id="skills" className="section-sm"><Skills /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="achievements" className="section-sm"><Achievements /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>
      <footer>
        <div className="container">
          © {new Date().getFullYear()} Gopal Maurya · Built with ♥
        </div>
      </footer>
    </>
  );
}

export default App;
