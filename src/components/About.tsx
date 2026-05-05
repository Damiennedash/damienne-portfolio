import Image from "next/image";

const stats = [
  { value: "2+", label: "Ans d'Expérience" },
  { value: "10+", label: "Projets Réalisés" },
  { value: "3+", label: "Clients Satisfaits" },
];

const skills = ["Design Graphique", "Création d'Affiches", "Identité Visuelle", "Photographie", "Réseaux Sociaux", "Communication"];

export default function About() {
  return (
    <section id="apropos" style={{ background: "#1B3A2D", padding: "80px 0", overflowX: "hidden" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ─── LEFT — Portrait photo ─── */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
              {/* Gold accent */}
              <div style={{
                position: "absolute", bottom: -12, right: -12,
                width: "100%", height: "100%",
                borderRadius: 24, background: "rgba(232,160,32,0.25)"
              }} />
              {/* Photo */}
              <div style={{
                position: "relative", width: "100%", paddingBottom: "125%",
                borderRadius: 24, overflow: "hidden"
              }}>
                <Image
                  src="/images/profile/damienne.jpeg"
                  alt="Damienne"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* ─── RIGHT — Text ─── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 32, height: 2, background: "#E8A020", display: "inline-block" }} />
              <span style={{ color: "#E8A020", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                À Propos de Moi
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#fff", lineHeight: 1.1 }}>
              Qui est{" "}
              <span style={{ color: "#E8A020", fontStyle: "italic" }}>Damienne ?</span>
            </h2>

            {/* Text */}
            <p style={{ color: "#BDC8C0", fontSize: 15, lineHeight: 1.8 }}>
              Je suis une graphiste designer passionnée, spécialisée dans la création visuelle percutante. Mon travail allie créativité et communication pour donner vie à des projets qui laissent une impression durable.
            </p>
            <p style={{ color: "#BDC8C0", fontSize: 15, lineHeight: 1.8 }}>
              De la conception d'affiches publicitaires à la photographie, chaque création raconte une histoire unique. J'ai eu l'opportunité de travailler sur des projets pour{" "}
              <span style={{ color: "#E8A020", fontWeight: 700 }}>Lomé Business School (LBS)</span>.
            </p>

            {/* Skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map(s => (
                <span key={s} style={{
                  border: "1px solid rgba(232,160,32,0.5)", borderRadius: 100,
                  padding: "5px 14px", fontSize: 12, fontWeight: 600, color: "#E8A020"
                }}>
                  {s}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)"
            }}>
              {stats.map(s => (
                <div key={s.label}>
                  <p style={{ fontSize: 32, fontWeight: 900, color: "#E8A020" }}>{s.value}</p>
                  <p style={{ fontSize: 12, color: "#8A9E94", marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#E8A020", color: "#fff", fontWeight: 700, fontSize: 14,
                padding: "12px 24px", borderRadius: 100, textDecoration: "none"
              }}>
                Travailler avec moi →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
