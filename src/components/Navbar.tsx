"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Accueil",  href: "#accueil"  },
  { label: "À Propos", href: "#apropos"  },
  { label: "Créations",href: "#creations"},
  { label: "Photos",   href: "#photos"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    setActive(href.replace("#", ""));
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "#fff" : "transparent",
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
      transition: "background 0.3s, box-shadow 0.3s",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "14px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxSizing: "border-box", width: "100%",
      }}>

        {/* Logo */}
        <a href="#accueil" onClick={() => go("#accueil")}
          style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "#1B3A2D", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#E8A020", fontWeight: 900, fontSize: 16 }}>D</span>
          </div>
          <span style={{ fontWeight: 800, color: "#1B3A2D", fontSize: 18 }}>Damienne.</span>
        </a>

        {/* Desktop nav links */}
        <ul style={{
          display: "none", listStyle: "none", gap: 32, margin: 0, padding: 0,
        }} className="desk-nav">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => go(link.href)}
                style={{
                  textDecoration: "none", fontSize: 14, fontWeight: 600,
                  color: active === link.href.replace("#", "") ? "#E8A020" : "#1B3A2D",
                  borderBottom: active === link.href.replace("#", "") ? "2px solid #E8A020" : "2px solid transparent",
                  paddingBottom: 2, transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="desk-cta"
          style={{
            display: "none",
            background: "#1B3A2D", color: "#fff",
            fontSize: 13, fontWeight: 700,
            padding: "10px 20px", borderRadius: 100,
            textDecoration: "none", flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          Me Contacter
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "flex", flexDirection: "column", gap: 5,
            padding: 6, background: "none", border: "none", cursor: "pointer",
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2, background: "#1B3A2D", borderRadius: 2,
              transition: "all 0.25s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                : i === 1 ? "opacity: 0; scaleX(0)"
                : "rotate(-45deg) translate(5px, -5px)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#fff", padding: "8px 24px 24px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => go(link.href)}
              style={{
                display: "block", padding: "13px 0",
                color: "#1B3A2D", fontWeight: 600, fontSize: 15,
                borderBottom: "1px solid #F0F0F0", textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => go("#contact")}
            style={{
              display: "block", marginTop: 16, textAlign: "center",
              background: "#1B3A2D", color: "#fff",
              padding: "12px", borderRadius: 100,
              fontWeight: 700, fontSize: 14, textDecoration: "none",
            }}
          >
            Me Contacter
          </a>
        </div>
      )}

      {/* Responsive styles injected via <style> */}
      <style>{`
        @media (min-width: 768px) {
          .desk-nav  { display: flex !important; }
          .desk-cta  { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
