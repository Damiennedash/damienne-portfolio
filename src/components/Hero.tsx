"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Graphiste Designer", "Créatrice d'Affiches", "Photographe"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setIdx(i => (i + 1) % roles.length); setShow(true); }, 350);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="accueil" style={{ background: "#F9F6EF", minHeight: "100vh", overflowX: "hidden" }}
      className="flex items-center">
      <div className="w-full max-w-7xl mx-auto pt-28 pb-16" style={{ padding: "112px 24px 64px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ─── LEFT ─── */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">

            {/* Tag */}
            <span style={{ border: "1.5px solid #1B3A2D", borderRadius: "100px", display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", width: "fit-content" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8A020", display: "inline-block" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1B3A2D" }}>Bonjour !</span>
            </span>

            {/* Heading */}
            <div>
              <h1 style={{ fontSize: "clamp(28px, 8vw, 58px)", fontWeight: 900, lineHeight: 1.1, color: "#111" }}>
                Je suis{" "}
                <span style={{ color: "#E8A020", fontStyle: "italic" }}>Damienne,</span>
              </h1>
              <div style={{ height: 44, display: "flex", alignItems: "center", marginTop: 6 }}>
                <p style={{
                  fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "#1B3A2D",
                  opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(-6px)",
                  transition: "opacity 0.35s ease, transform 0.35s ease"
                }}>
                  {roles[idx]}
                </p>
              </div>
            </div>

            {/* Description */}
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7, maxWidth: 420 }}>
              Passionnée par le design visuel et la communication créative. Je transforme vos idées en affiches percutantes et en images mémorables.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#creations"
                style={{ background: "#1B3A2D", color: "#fff", fontWeight: 700, fontSize: 14, padding: "12px 24px", borderRadius: 100, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Voir mes créations
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
              </a>
              <a href="#contact"
                style={{ border: "2px solid #1B3A2D", color: "#1B3A2D", fontWeight: 700, fontSize: 14, padding: "12px 24px", borderRadius: 100, textDecoration: "none", background: "transparent" }}>
                Me Contacter
              </a>
            </div>

            {/* Tools */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Photoshop", "Illustrator", "Canva", "Figma", "Photographie"].map(s => (
                <span key={s} style={{ background: "#fff", border: "1px solid #E0DEDA", borderRadius: 100, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#1B3A2D" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ─── RIGHT — Portrait photo card ─── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div style={{ position: "relative", width: "100%", maxWidth: 380 }}>

              {/* Gold accent strip */}
              <div style={{
                position: "absolute", top: 24, bottom: 24, left: 0,
                width: 6, background: "#E8A020", borderRadius: 99
              }} />

              {/* Photo card */}
              <div style={{
                position: "relative", width: "100%", paddingBottom: "130%",
                borderRadius: 28, overflow: "hidden", background: "#1B3A2D"
              }}>
                <Image
                  src="/images/profile/frame1.png"
                  alt="Damienne — Graphiste Designer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom label */}
                <div style={{
                  position: "absolute", bottom: 16, left: 16, right: 16,
                  background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
                  borderRadius: 14, padding: "10px 16px",
                  display: "flex", alignItems: "center", justifyContent: "space-between"
                }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 14, color: "#1B3A2D" }}>Damienne</p>
                    <p style={{ fontSize: 12, color: "#888" }}>Graphiste Designer</p>
                  </div>
                  <span style={{ background: "#E8A020", borderRadius: 100, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "#fff" }}>
                    Disponible
                  </span>
                </div>
              </div>

              {/* Floating stat card */}
              <div style={{
                position: "absolute", top: 24, right: 12,
                background: "#fff", borderRadius: 16, padding: "12px 16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                textAlign: "center", minWidth: 80
              }}>
                <p style={{ fontSize: 22, fontWeight: 900, color: "#E8A020" }}>10+</p>
                <p style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Projets</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
