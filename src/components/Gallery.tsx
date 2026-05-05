"use client";
import { useState } from "react";
import Image from "next/image";

/*
  h = paddingBottom percentage pour forcer la hauteur de chaque photo.
  Valeurs variées = effet masonry Pinterest authentique.
*/
const photos = [
  { src: "/images/photos/lbs-photo1.png", alt: "Formation LBS",            tag: "LBS",       h: "145%" },
  { src: "/images/photos/photo2.jpeg",    alt: "Étudiants LBS",            tag: "Événement", h: "85%"  },
  { src: "/images/photos/photo3.jpeg",    alt: "Groupe LBS",               tag: "Événement", h: "125%" },
  { src: "/images/photos/photo4.jpeg",    alt: "Moment de formation",      tag: "Événement", h: "100%" },
  { src: "/images/photos/photo5.jpeg",    alt: "Campus LBS",               tag: "LBS",       h: "135%" },
  { src: "/images/photos/photo6.jpeg",    alt: "Activités étudiantes",     tag: "Événement", h: "78%"  },
  { src: "/images/photos/photo7.jpeg",    alt: "Salle de classe",          tag: "LBS",       h: "120%" },
  { src: "/images/photos/photo8.jpeg",    alt: "Portrait",                 tag: "Portrait",  h: "150%" },
  { src: "/images/photos/photo9.jpeg",    alt: "Cérémonie",                tag: "Événement", h: "90%"  },
  { src: "/images/photos/photo10.jpeg",   alt: "Groupe d'étudiants",       tag: "Événement", h: "130%" },
  { src: "/images/photos/photo1.png",     alt: "Étudiante avec téléphone", tag: "LBS",       h: "95%"  },
  { src: "/images/photos/lbs-photo2.png", alt: "Travail en formation",     tag: "LBS",       h: "115%" },
];

const INITIAL_COUNT = 6;

export default function Gallery() {
  const [showAll, setShowAll]   = useState(false);
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);

  const visible = showAll ? photos : photos.slice(0, INITIAL_COUNT);

  return (
    <section id="photos" style={{ background: "#fff", padding: "80px 0", overflowX: "hidden" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ width: 36, height: 2, background: "#E8A020", display: "inline-block" }} />
            <span style={{ color: "#E8A020", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Ma Photographie
            </span>
            <span style={{ width: 36, height: 2, background: "#E8A020", display: "inline-block" }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#111" }}>
            Capturer l&apos;{" "}
            <span style={{ color: "#E8A020", fontStyle: "italic" }}>Instant</span>
          </h2>
          <p style={{ color: "#aaa", marginTop: 10, fontSize: 13, maxWidth: 320, margin: "10px auto 0" }}>
            Des moments authentiques saisis avec soin et créativité.
          </p>
        </div>

        {/* ── Masonry Pinterest ── */}
        <div className="pinterest-grid">
          {visible.map((photo) => (
            <div
              key={photo.src}
              className="pinterest-item"
              onClick={() => setSelected(photo)}
            >
              {/* paddingBottom force la hauteur variable = effet Pinterest */}
              <div style={{ position: "relative", width: "100%", paddingBottom: photo.h }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay au hover */}
                <div className="pinterest-overlay">
                  <span style={{
                    background: "rgba(232,160,32,0.92)", color: "#fff",
                    fontSize: 10, fontWeight: 700, padding: "3px 9px",
                    borderRadius: 100, width: "fit-content", marginBottom: 6,
                  }}>
                    {photo.tag}
                  </span>
                  <p style={{ color: "#fff", fontSize: 12, fontWeight: 600, lineHeight: 1.3 }}>
                    {photo.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Toggle button ── */}
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <button
            onClick={() => setShowAll(v => !v)}
            style={{
              background: showAll ? "#fff" : "#1B3A2D",
              color: showAll ? "#1B3A2D" : "#fff",
              fontWeight: 700, fontSize: 13,
              padding: "12px 32px", borderRadius: 100,
              border: "2px solid #1B3A2D", cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {showAll
              ? "← Voir moins de photos"
              : `Voir toutes les photos (${photos.length - INITIAL_COUNT} de plus)`}
          </button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)",
            zIndex: 999, display: "flex", alignItems: "center",
            justifyContent: "center", padding: 20,
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: 700, width: "100%" }}>
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute", top: -42, right: 0,
                background: "none", border: "none",
                color: "rgba(255,255,255,0.65)", cursor: "pointer",
                fontSize: 13, fontWeight: 700,
              }}
            >
              ✕ Fermer
            </button>
            <div style={{
              position: "relative", width: "100%", paddingBottom: "75%",
              borderRadius: 16, overflow: "hidden",
            }}>
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                style={{ objectFit: "contain", background: "#0d0d0d" }}
              />
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center", marginTop: 10, fontSize: 12 }}>
              {selected.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
