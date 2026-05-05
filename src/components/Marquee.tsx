export default function Marquee() {
  const items = [
    "Affiches Publicitaires", "Identité Visuelle", "Design Graphique",
    "Photographie", "Réseaux Sociaux", "Communication Visuelle",
    "Canva & Illustrator", "Mise en Page",
  ];
  const doubled = [...items, ...items];

  return (
    <div style={{ background: "#1B3A2D", padding: "14px 0", overflow: "hidden" }}>
      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, marginRight: 20 }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {item}
            </span>
            <span style={{ color: "#E8A020", fontSize: 16, lineHeight: 1 }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
