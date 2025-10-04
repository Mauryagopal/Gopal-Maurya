// src/components/header.jsx
import { useEffect, useRef, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const sections = ["home","about","skills","projects","achievements","contact"];

export default function Header(){
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Respect saved theme or system preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return prefersDark ? "dark" : "light";
  });

  const overlayRef = useRef(null);

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
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sticky style + scroll progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape and resize up
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const mq = window.matchMedia("(min-width: 768px)");
    const onResize = (e) => { if (e.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    mq.addEventListener?.("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener?.("change", onResize);
    };
  }, []);

  // Close when clicking overlay
  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) setOpen(false);
  };

  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="skip-link">Skip to content</a>
      <div className="progress" style={{width: `${progress}%`}} />

      <div className="container nav">
        <a href="#home" className="brand" aria-label="Home">
          <span className="brand-gradient">Gopal Maurya</span>
        </a>

        {/* Desktop nav */}
        <nav className="links" aria-label="Primary">
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={active===id ? "active" : ""}
              aria-current={active===id ? "page" : undefined}
            >
              {id[0].toUpperCase()+id.slice(1)}
            </a>
          ))}
        </nav>

        <div className="actions">
          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <FiSun/> : <FiMoon/>}
          </button>

          <button
            className="icon-btn menu-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            title="Menu"
          >
            {open ? <FiX/> : <FiMenu/>}
          </button>
        </div>
      </div>

      {/* Mobile menu (overlay + sheet) */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        className={`overlay ${open ? "open" : ""}`}
        onClick={onOverlayClick}
        aria-hidden={!open}
      >
        <div className="sheet">
          <div className="sheet-header">
            <span className="brand-small">Menu</span>
            <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
              <FiX/>
            </button>
          </div>
          <div className="sheet-links">
            {sections.map(id => (
              <a
                key={id}
                href={`#${id}`}
                className={active===id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {id[0].toUpperCase()+id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}