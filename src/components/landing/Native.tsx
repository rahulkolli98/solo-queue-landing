const scenes = [
  { t: "0:00–0:02", h: "On screen:", b: "“My app charged me to use my app.”" },
  {
    t: "0:02–0:08",
    h: "VO:",
    b: "I built a scheduler. It pays a fee every time it posts, including when I post.",
  },
  {
    t: "0:08–0:18",
    h: "B-roll:",
    b: "invoice scroll, hard cut to the week view.",
  },
  { t: "0:25–0:30", h: "CTA:", b: "“Day 1. Follow the build.”" },
];

export default function Native() {
  return (
    <section
      id="native"
      aria-labelledby="nat"
      className="l-section"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        background: "#FBF5E8",
        borderTop: "1.5px solid #E2D3B8",
        borderBottom: "1.5px solid #E2D3B8",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        <span className="l-kicker" style={{ fontSize: 34 }}>
          Same topic —
        </span>
        <h2
          id="nat"
          className="l-display"
          style={{ fontSize: 90, lineHeight: 0.92, letterSpacing: "-3.6px" }}
        >
          not cross-posted. <em>Written twice.</em>
        </h2>
        <div
          className="l-row"
          style={{
            marginTop: 16,
            gap: 10,
            background: "#FFD54A",
            padding: "10px 18px",
            borderRadius: 24,
            transform: "rotate(-1deg)",
          }}
        >
          <span className="l-mono" style={{ fontSize: 12 }}>
            TOPIC
          </span>
          <span style={{ fontSize: 16, fontWeight: 600 }}>
            Per-post API fees quietly tax consistency
          </span>
        </div>
      </div>
      <div
        className="l-grid-mobile-1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 28,
          marginTop: 56,
        }}
      >
        <div
          style={{
            background: "#2B1A14",
            color: "#F4EBD9",
            borderRadius: 26,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            transform: "rotate(-0.8deg)",
          }}
        >
          <div className="l-row" style={{ justifyContent: "space-between" }}>
            <div className="l-row">
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "#F4EBD9",
                  color: "#2B1A14",
                  fontWeight: 700,
                  fontSize: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                @
              </span>
              <span
                className="l-disp"
                style={{ fontSize: 26, fontWeight: 700 }}
              >
                Threads
              </span>
            </div>
            <span
              className="l-mono"
              style={{ fontSize: 12, color: "#FFD54A" }}
            >
              THREAD · 4 POSTS · ≤500 CHARS EACH
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            <p
              style={{
                margin: 0,
                paddingLeft: 18,
                borderLeft: "2px solid #FFD54A",
              }}
            >
              Last month my own scheduler charged me for every post I made. I
              built it. I was the customer. I still paid per post.
            </p>
            <p
              style={{
                margin: 0,
                paddingLeft: 18,
                borderLeft: "2px solid rgba(244,235,217,0.25)",
              }}
            >
              postship runs on a third-party posting API. Great for launching
              fast. Terrible when you want to post three times a day to the
              same account.
            </p>
            <p
              style={{
                margin: 0,
                paddingLeft: 18,
                borderLeft: "2px solid rgba(244,235,217,0.25)",
                color: "#BFAE98",
              }}
            >
              + 2 more posts in the thread
            </p>
          </div>
          <span
            className="l-mono"
            style={{ marginTop: "auto", fontSize: 12, color: "#BFAE98" }}
          >
            FRAME: HOOK → TENSION → TURN → PAYOFF
          </span>
        </div>
        <div
          style={{
            background: "#F0775C",
            borderRadius: 26,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            transform: "rotate(0.8deg)",
          }}
        >
          <div className="l-row" style={{ justifyContent: "space-between" }}>
            <div className="l-row">
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: "#2B1A14",
                  color: "#F0775C",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
                aria-hidden="true"
              >
                ▢
              </span>
              <span
                className="l-disp"
                style={{ fontSize: 26, fontWeight: 700 }}
              >
                Instagram
              </span>
            </div>
            <span className="l-mono" style={{ fontSize: 12 }}>
              REEL SCRIPT · 30 SEC
            </span>
          </div>
          <div
            style={{
              background: "#FBF5E8",
              borderRadius: 6,
              padding: "8px 22px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {scenes.map((s, i) => (
              <div
                key={s.t}
                className="l-row"
                style={{
                  gap: 18,
                  padding: "12px 0",
                  borderBottom:
                    i < scenes.length - 1 ? "1px solid #E2D3B8" : "none",
                  alignItems: "flex-start",
                  fontSize: 16,
                  lineHeight: 1.45,
                }}
              >
                <span
                  className="l-mono"
                  style={{
                    width: 80,
                    flexShrink: 0,
                    fontSize: 13,
                    color: "#A3361F",
                    paddingTop: 2,
                  }}
                >
                  {s.t}
                </span>
                <span>
                  <b>{s.h}</b> {s.b}
                </span>
              </div>
            ))}
          </div>
          <span className="l-mono" style={{ marginTop: "auto", fontSize: 12 }}>
            FRAME: CONFESSION · + CAPTION &amp; CAROUSEL VERSIONS
          </span>
        </div>
      </div>
    </section>
  );
}
