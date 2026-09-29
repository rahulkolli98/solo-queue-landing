import WaitlistForm from "./WaitlistForm";

export default function Cta() {
  return (
    <section
      id="start"
      aria-labelledby="cta"
      style={{
        background: "#F0775C",
        boxSizing: "border-box",
        padding: "110px 80px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 26,
        position: "relative",
        overflow: "hidden",
      }}
      className="l-section"
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: -90,
          top: 60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "#FFD54A",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          right: -60,
          bottom: 120,
          width: 260,
          height: 260,
          borderRadius: "50% 50% 0 0",
          background: "rgba(43,26,20,0.14)",
        }}
      />
      <span
        className="l-kicker"
        style={{ position: "relative", fontSize: 38 }}
      >
        Research once —
      </span>
      <h2
        id="cta"
        className="l-display"
        style={{
          position: "relative",
          margin: 0,
          fontSize: 150,
          lineHeight: 0.88,
          letterSpacing: -7,
        }}
      >
        post all month.
      </h2>
      <WaitlistForm />
      <span
        className="l-mono"
        style={{
          position: "relative",
          fontSize: 12,
          letterSpacing: "0.08em",
        }}
      >
        THREADS + INSTAGRAM · FLAT PRICE · CANCEL ANYTIME
      </span>
      <footer
        style={{
          position: "relative",
          marginTop: "auto",
          width: "100%",
          paddingTop: 30,
          borderTop: "1.5px solid rgba(43,26,20,0.3)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 14,
        }}
      >
        <span
          className="l-disp"
          style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }}
        >
          solo queue●
        </span>
        <nav aria-label="Footer" className="l-row" style={{ gap: 28 }}>
          <a href="#">Build log</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </nav>
        <span className="l-mono" style={{ fontSize: 12 }}>
          NOT AFFILIATED WITH META
        </span>
      </footer>
    </section>
  );
}
