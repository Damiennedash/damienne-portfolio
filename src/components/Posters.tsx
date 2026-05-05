"use client";
import { useState } from "react";
import Image from "next/image";

/* encode filenames with spaces/accents for the browser */
const s = (file: string) => `/images/affiches/${encodeURIComponent(file)}`;

type Poster = { src: string; title: string; category: string };

const posters: Poster[] = [
  /* ─── ADMISSIONS ─────────────────────────────────── */
  { src: s("admissions.jpeg"),          title: "Lancement Admissions 2026-2027",   category: "Admissions" },
  { src: s("Back to school.jpg"),       title: "Back To School",                   category: "Admissions" },
  { src: s("Frame 325.png"),            title: "Rentrée Académique 2026",          category: "Admissions" },
  { src: s("Test 09 Mai.png"),          title: "Admissions Ouvertes — 09 Mai",     category: "Admissions" },
  { src: s("Test 18 Avril.png"),        title: "Admissions Ouvertes — 18 Avril",   category: "Admissions" },
  { src: s("Test 18 Avril_1.png"),      title: "Admissions — 18 Avril (v2)",       category: "Admissions" },
  { src: s("Test 5 juillet.png"),       title: "Admissions — 5 Juillet",           category: "Admissions" },

  /* ─── ÉVÉNEMENTS ─────────────────────────────────── */
  { src: s("JPO1.jpg"),                 title: "Journée Portes Ouvertes",          category: "Événements" },
  { src: s("JPO12.jpg"),               title: "Journée Portes Ouvertes",          category: "Événements" },
  { src: s("JPO15.jpg"),               title: "Journée Portes Ouvertes",          category: "Événements" },
  { src: s("JPO23.jpg"),               title: "Journée Portes Ouvertes",          category: "Événements" },
  { src: s("Frame 424.jpg"),           title: "Inside LBS — Portes Ouvertes",     category: "Événements" },
  { src: s("Frame 421.jpg"),           title: "Inside LBS — 14 Mars",             category: "Événements" },
  { src: s("Frame 523.png"),           title: "Inside LBS — Merci",               category: "Événements" },
  { src: s("CLUBS2.jpg"),              title: "Inside LBS — Nos Clubs",           category: "Événements" },
  { src: s("Frame 132.png"),           title: "INTELO 2025",                       category: "Événements" },
  { src: s("Frame 144.png"),           title: "INTELO 2025 — Activités",          category: "Événements" },
  { src: s("Instagram post - 331.jpg"), title: "INTELO — GVA Togo Sponsor",       category: "Événements" },
  { src: s("Frame 64.jpg"),            title: "Masterclass — Carrière Internationale", category: "Événements" },
  { src: s("NOEL.png"),                title: "Joyeux Noël",                      category: "Événements" },
  { src: s("Frame 16.png"),            title: "Happy New Year 2025",              category: "Événements" },
  { src: s("Instagram post - 24.png"), title: "Happy New Year 2025",              category: "Événements" },
  { src: s("Janvier-OK.jpg"),          title: "Calendrier Janvier",               category: "Événements" },
  { src: s("Oct-OK.jpg"),              title: "Calendrier Octobre",               category: "Événements" },

  /* ─── CERTIFICATION TOEIC ────────────────────────── */
  { src: s("toeic.png"),               title: "Centre TOEIC — LBS",              category: "TOEIC" },

  /* ─── VIE ÉTUDIANTE ──────────────────────────────── */
  { src: s("Etudiant.png"),                         title: "Étudiant de la Semaine — Guei Camus",   category: "Vie Étudiante" },
  { src: s("Scheba.png"),                           title: "Étudiant de la Semaine — Schéba",       category: "Vie Étudiante" },
  { src: s("Frame 374.png"),                        title: "Étudiant de la Semaine — Nonon Saa",    category: "Vie Étudiante" },
  { src: s("Annonce étudiant de la semaine.png"),   title: "Annonce Étudiant de la Semaine",        category: "Vie Étudiante" },

  /* ─── COMMUNICATION ──────────────────────────────── */
  { src: s("BACHE-LBS.jpg"),            title: "Bâche LBS",                       category: "Communication" },
  { src: s("BACHE-LBS-ENTREE.jpg"),     title: "Bâche Entrée LBS",               category: "Communication" },
  { src: s("Calendrier_LBS_verso.jpg"), title: "Calendrier LBS",                  category: "Communication" },
  { src: s("Frame 136.png"),            title: "Visuel LBS",                      category: "Communication" },
  { src: s("Frame 145.png"),            title: "Visuel LBS",                      category: "Communication" },
  { src: s("Frame 148.png"),            title: "Visuel LBS",                      category: "Communication" },
  { src: s("Frame 176.png"),            title: "Visuel LBS",                      category: "Communication" },
  { src: s("Frame 21.jpg"),             title: "Visuel LBS",                      category: "Communication" },
  { src: s("Frame 403.png"),            title: "Visuel LBS",                      category: "Communication" },
  { src: s("Frame 75.jpg"),             title: "Visuel LBS",                      category: "Communication" },
  { src: s("Frame 85.jpg"),             title: "Visuel LBS",                      category: "Communication" },
  { src: s("Instagram post - 26.jpg"),  title: "Post Instagram",                  category: "Communication" },
  { src: s("Instagram post - 314.png"), title: "Post Instagram",                  category: "Communication" },
  { src: s("Instagram post - 337.jpg"), title: "Post Instagram",                  category: "Communication" },
  { src: s("Instagram post - 340.png"), title: "Post Instagram",                  category: "Communication" },
];

const cats = ["Tout", "Admissions", "Événements", "TOEIC", "Vie Étudiante", "Communication"];

const catColors: Record<string, string> = {
  Admissions:     "#2563EB",
  "Événements":   "#7C3AED",
  TOEIC:          "#059669",
  "Vie Étudiante":"#DB2777",
  Communication:  "#D97706",
};

export default function Posters() {
  const [cat, setCat] = useState("Tout");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Poster | null>(null);

  const filtered = cat === "Tout" ? posters : posters.filter(p => p.category === cat);
  const INITIAL = 12;
  const visible = showAll ? filtered : filtered.slice(0, INITIAL);

  return (
    <section id="creations" style={{ background: "#F9F6EF", padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{ width: 32, height: 2, background: "#E8A020", display: "inline-block" }} />
            <span style={{ color: "#E8A020", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Mes Créations
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 900, color: "#111", lineHeight: 1.1 }}>
              Affiches & <span style={{ color: "#E8A020", fontStyle: "italic" }}>Visuels</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: "#999", marginLeft: 12 }}>
                ({filtered.length} créations)
              </span>
            </h2>
          </div>
        </div>

        {/* ── Category tabs ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {cats.map(c => (
            <button key={c} onClick={() => { setCat(c); setShowAll(false); }} style={{
              padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 700,
              cursor: "pointer", border: "none", transition: "all 0.2s",
              background: cat === c ? (catColors[c] ?? "#1B3A2D") : "#fff",
              color: cat === c ? "#fff" : "#444",
              boxShadow: cat === c ? "none" : "0 0 0 1.5px #E5E7EB inset",
            }}>
              {c}
            </button>
          ))}
        </div>

        {/* ── Pinterest grid (square cards) ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}>
          {visible.map((p, i) => (
            <div
              key={`${p.src}-${i}`}
              onClick={() => setSelected(p)}
              style={{
                cursor: "pointer", borderRadius: 16, overflow: "hidden",
                background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                transition: "transform 0.22s, box-shadow 0.22s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.14)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "none";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.07)";
              }}
            >
              {/* Square image */}
              <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                />
                {/* Category badge */}
                <span style={{
                  position: "absolute", top: 10, left: 10,
                  background: catColors[p.category] ?? "#1B3A2D",
                  color: "#fff", fontSize: 10, fontWeight: 700,
                  padding: "3px 10px", borderRadius: 100,
                }}>
                  {p.category}
                </span>
                {/* Hover overlay */}
                <div
                  className="poster-overlay"
                  style={{
                    position: "absolute", inset: 0,
                    background: "rgba(17,17,17,0.55)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: 0, transition: "opacity 0.22s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = "1"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = "0"; }}
                >
                  <span style={{
                    border: "2px solid #fff", color: "#fff", borderRadius: 100,
                    padding: "8px 18px", fontSize: 12, fontWeight: 700,
                  }}>
                    Agrandir
                  </span>
                </div>
              </div>

              {/* Title */}
              <div style={{ padding: "12px 14px" }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: "#111", lineHeight: 1.3 }}>{p.title}</p>
                <p style={{ fontSize: 11, color: "#999", marginTop: 3 }}>Lomé Business School</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Voir plus ── */}
        {!showAll && filtered.length > INITIAL && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                background: "#1B3A2D", color: "#fff", fontWeight: 700, fontSize: 14,
                padding: "13px 36px", borderRadius: 100, border: "none", cursor: "pointer",
              }}
            >
              Voir les {filtered.length - INITIAL} autres créations
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)",
            zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: 20, overflow: "hidden",
              width: "100%", maxWidth: 520, boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                style={{ objectFit: "contain", background: "#f8f8f8" }}
              />
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute", top: 12, right: 12,
                  width: 34, height: 34, borderRadius: "50%",
                  background: "#111", color: "#fff", border: "none",
                  cursor: "pointer", fontSize: 15, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: "14px 18px", borderTop: "1px solid #f0f0f0" }}>
              <span style={{
                display: "inline-block",
                background: catColors[selected.category] ?? "#1B3A2D",
                color: "#fff", fontSize: 10, fontWeight: 700,
                padding: "3px 10px", borderRadius: 100, marginBottom: 6,
              }}>
                {selected.category}
              </span>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#111" }}>{selected.title}</p>
              <p style={{ fontSize: 12, color: "#999", marginTop: 3 }}>Lomé Business School</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
