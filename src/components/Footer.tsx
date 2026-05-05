export default function Footer() {
  return (
    <footer style={{ background: "#1B3A2D", padding: "32px 0" }}>
      <div className="max-w-7xl mx-auto px-6" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E8A020", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>D</span>
          </div>
          <div>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 17 }}>Damienne DJATA</span>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, marginTop: 1 }}>Graphiste Designer</p>
          </div>
        </div>

        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textAlign: "center" }}>
          © {new Date().getFullYear()} Damienne DJATA · Graphiste Designer · Lomé, Togo
        </p>

        {/* Email icon */}
        <a href="mailto:djatadamienne5@gmail.com"
          style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
