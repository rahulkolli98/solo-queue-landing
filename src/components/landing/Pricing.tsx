const checks = [
  "Unlimited queued posts on Threads and Instagram",
  "Research inbox, briefs and angles",
  "Story frames, voice and remix",
  "Token refresh and limit alerts",
];

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C8412B"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: 20, height: 20, flexShrink: 0, marginTop: 1 }}
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

export default function Pricing() {
  const price = process.env.NEXT_PUBLIC_PRICE ?? "[PRICE]";
  return (
    <section
      id="pricing"
      aria-labelledby="price"
      className="l-section"
      style={{ paddingTop: 20, paddingBottom: 110 }}
    >
      <div
        style={{
          background: "#2B1A14",
          color: "#F4EBD9",
          borderRadius: 30,
          padding: 72,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: 60,
          alignItems: "center",
        }}
        className="l-grid-mobile-1"
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: 22 }}
        >
          <span className="l-eyebrow" style={{ color: "#FFD54A" }}>
            Pricing
          </span>
          <h2
            id="price"
            className="l-display"
            style={{ fontSize: 78, letterSpacing: -3 }}
          >
            No per-post fees.{" "}
            <span style={{ color: "#F0775C" }}>Ever.</span>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.55,
              color: "#BFAE98",
              maxWidth: 500,
            }}
          >
            Solo Queue talks to Meta&apos;s official APIs with your own
            accounts, so there&apos;s no posting middleman taking a cut of
            every post. One flat price, whether you post five times a week
            or five times a day.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 14,
              marginTop: 10,
            }}
          >
            <div
              style={{
                border: "1.5px solid rgba(244,235,217,0.25)",
                borderRadius: 18,
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span
                className="l-mono"
                style={{ fontSize: 11, color: "#BFAE98" }}
              >
                PER-POST SCHEDULERS
              </span>
              <span style={{ fontSize: 16 }}>
                Cost grows with every post you queue
              </span>
            </div>
            <div
              style={{
                background: "#FFD54A",
                color: "#2B1A14",
                borderRadius: 18,
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span className="l-mono" style={{ fontSize: 11 }}>
                SOLO QUEUE
              </span>
              <span style={{ fontSize: 16, fontWeight: 600 }}>
                Same price at 5 or 90 posts a month
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#F4EBD9",
            color: "#2B1A14",
            borderRadius: 22,
            padding: 36,
            display: "flex",
            flexDirection: "column",
            gap: 22,
            transform: "rotate(1.5deg)",
          }}
        >
          <div className="l-row" style={{ justifyContent: "space-between" }}>
            <span
              className="l-disp"
              style={{ fontSize: 30, fontWeight: 800 }}
            >
              Solo
            </span>
            <span
              className="l-mono"
              style={{
                fontSize: 11,
                height: 26,
                padding: "0 12px",
                borderRadius: 13,
                background: "#C8412B",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              EARLY ACCESS
            </span>
          </div>
          <div
            className="l-row"
            style={{ alignItems: "baseline", gap: 8 }}
          >
            <span
              className="l-disp"
              style={{ fontSize: 64, fontWeight: 800, letterSpacing: -2 }}
            >
              {price}
            </span>
            <span style={{ fontSize: 17, color: "#6B5146" }}>/ month</span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {checks.map((c) => (
              <div key={c} className="l-chk">
                <Check />
                {c}
              </div>
            ))}
          </div>
          <a href="#start" className="lbtn pri">
            Get early access
          </a>
        </div>
      </div>
    </section>
  );
}
