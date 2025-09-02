// src/components/header.jsx
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const sections = ["home","about","skills","projects","achievements","contact"];

export default function Header(){
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  // Scroll spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Theme handling
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="brand" style={{fontWeight:800, fontSize:22}}>
          Gopal Maurya
        </a>

        <nav style={{display:'flex', alignItems:'center', gap:12}}>
          <button
            onClick={() => setOpen(o => !o)}
            className="btn"
            aria-label="Toggle menu"
            style={{display: 'none'}}
          >Menu</button>

          <div style={{display:'flex', gap:8}}>
            {sections.map(id => (
              <a
                key={id}
                href={`#${id}`}
                className={active===id ? "active" : ""}
              >
                {id[0].toUpperCase()+id.slice(1)}
              </a>
            ))}
          </div>

          <button
            className="btn"
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <FiSun/> : <FiMoon/>}
          </button>
        </nav>
      </div>
    </header>
  );
}
