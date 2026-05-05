"use client";
import { useState } from "react";

/*
  ─── CONFIGURATION EMAIL ────────────────────────────────────────────────
  Pour activer l'envoi réel d'emails :
  1. Va sur https://web3forms.com/
  2. Entre ton email djatadamienne5@gmail.com → reçois une clé gratuitement
  3. Crée le fichier .env.local à la racine du projet avec :
       NEXT_PUBLIC_WEB3FORMS_KEY=ta_cle_ici
  ────────────────────────────────────────────────────────────────────────
*/
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const infos = [
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "djatadamienne5@gmail.com",
    href: "mailto:djatadamienne5@gmail.com",
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Localisation",
    value: "Lomé, Togo",
    href: undefined,
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Disponibilité",
    value: "Disponible pour des projets freelance",
    href: undefined,
  },
];

export default function Contact() {
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [status,  setStatus]  = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key:   WEB3FORMS_KEY,
          /* Email reçu par Damienne */
          subject:      `Portfolio — Nouveau message de ${form.name}`,
          from_name:    "Portfolio Damienne DJATA",
          /* Email de confirmation envoyé automatiquement au client */
          botcheck:     false,
          name:         form.name,
          email:        form.email,
          message:      form.message,
          /* Message de remerciement au client (champ Web3Forms) */
          "reply-to":   form.email,
        }),
      });

      if (res.ok) {
        setStatus("done");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ background: "#F9F6EF", padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ─── LEFT ─── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 32, height: 2, background: "#E8A020", display: "inline-block" }} />
              <span style={{ color: "#E8A020", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Contact
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 900, color: "#111", lineHeight: 1.1 }}>
              Travaillons{" "}
              <span style={{ color: "#E8A020", fontStyle: "italic" }}>Ensemble</span>
            </h2>

            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7, maxWidth: 400 }}>
              Vous avez un projet de design ou de communication visuelle ? Je suis disponible pour donner vie à vos idées.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 8 }}>
              {infos.map(info => (
                <div key={info.label} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%", background: "#1B3A2D",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: "#999", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a href={info.href} style={{ color: "#1B3A2D", fontWeight: 700, fontSize: 14, textDecoration: "none", marginTop: 2, display: "block" }}>
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ color: "#1B3A2D", fontWeight: 700, fontSize: 14, marginTop: 2 }}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div style={{
              marginTop: 16, padding: "16px 20px",
              background: "#1B3A2D", borderRadius: 16,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "#E8A020", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 18 }}>D</span>
              </div>
              <div>
                <p style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>Damienne DJATA</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>Graphiste Designer · Lomé, Togo</p>
              </div>
            </div>
          </div>

          {/* ─── RIGHT — Form ─── */}
          <div style={{ background: "#fff", borderRadius: 24, padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

            {status === "done" ? (
              /* ── Succès ── */
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "50%", background: "#1B3A2D",
                  display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "#1B3A2D", marginBottom: 8 }}>Message envoyé !</h3>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6, maxWidth: 280, margin: "0 auto 6px" }}>
                  Merci pour votre message. Vous allez recevoir un email de confirmation.
                </p>
                <p style={{ color: "#666", fontSize: 14, fontWeight: 600 }}>
                  <span style={{ color: "#E8A020" }}>Damienne DJATA</span> vous répondra dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: 24, background: "none", border: "2px solid #1B3A2D",
                    color: "#1B3A2D", fontSize: 13, fontWeight: 700, cursor: "pointer",
                    padding: "8px 20px", borderRadius: 100,
                  }}
                >
                  Envoyer un autre message
                </button>
              </div>

            ) : (
              /* ── Formulaire ── */
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111", marginBottom: 4 }}>
                  Envoyer un message
                </h3>

                {[
                  { key: "name",  label: "Votre nom",  type: "text",  ph: "Votre nom complet" },
                  { key: "email", label: "Votre email", type: "email", ph: "votre@email.com" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 6 }}>
                      {f.label} <span style={{ color: "#E8A020" }}>*</span>
                    </label>
                    <input
                      type={f.type}
                      required
                      value={form[f.key as "name" | "email"]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      style={{
                        width: "100%", border: "1.5px solid #EAECF0", borderRadius: 12,
                        padding: "12px 16px", fontSize: 14, color: "#111",
                        outline: "none", fontFamily: "inherit", boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 6 }}>
                    Votre message <span style={{ color: "#E8A020" }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre projet..."
                    style={{
                      width: "100%", border: "1.5px solid #EAECF0", borderRadius: 12,
                      padding: "12px 16px", fontSize: 14, color: "#111",
                      outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box",
                    }}
                  />
                </div>

                {status === "error" && (
                  <p style={{ color: "#DC2626", fontSize: 13, textAlign: "center" }}>
                    Erreur d'envoi. Vérifiez la clé Web3Forms dans .env.local
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background: status === "sending" ? "#888" : "#1B3A2D",
                    color: "#fff", fontWeight: 700, fontSize: 14,
                    padding: "14px", borderRadius: 12, border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  {status === "sending" ? "Envoi en cours…" : "Envoyer le message →"}
                </button>

                <p style={{ fontSize: 11, color: "#bbb", textAlign: "center" }}>
                  Un email de confirmation vous sera envoyé automatiquement.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
