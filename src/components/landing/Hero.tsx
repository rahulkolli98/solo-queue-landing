import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        boxSizing: "border-box",
        padding: "20px 80px 100px",
      }}
      className="l-hero-sec"
    >
      <p className="l-kicker" style={{ margin: "0 0 0 10px", fontSize: 40 }}>
        For solo builders who post every day
      </p>
      <h1 className="l-disp l-hero-word" aria-label="solo queue">
        s<span className="l-hero-dot" aria-hidden="true" />
        l<span className="l-hero-dot" aria-hidden="true" /> queue
      </h1>
      <div
        className="l-stack-mobile"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: 30,
          maxWidth: 1440,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            width: 470,
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 30,
            paddingTop: 10,
          }}
        >
          <p style={{ margin: 0, fontSize: 21, lineHeight: 1.5 }}>
            Research a topic once. Get native Threads posts and Instagram reel
            scripts in your voice, then queue weeks of them ahead, straight
            through Meta&apos;s own APIs. <b>No per-post fees.</b>
          </p>
          <div className="l-row" style={{ gap: 12 }}>
            <a href="#start" className="lbtn pri">
              Get early access
            </a>
            <a href="#how" className="lbtn">
              See how it works
            </a>
          </div>
          <div
            className="l-grid-mobile-1"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 24,
              marginTop: 26,
            }}
          >
            {[
              {
                n: "01",
                items: ["Research once", "Write natively", "Queue weeks ahead"],
              },
              {
                n: "02",
                items: [
                  "Official Meta APIs",
                  "Your own accounts",
                  "Zero per-post fees",
                ],
              },
            ].map((col) => (
              <div
                key={col.n}
                className="l-row"
                style={{ alignItems: "flex-start", gap: 14 }}
              >
                <span
                  className="l-disp"
                  style={{ fontSize: 22, fontWeight: 700 }}
                >
                  {col.n}
                </span>
                <div style={{ display: "flex", gap: 12 }}>
                  <svg
                    width="12"
                    height="80"
                    viewBox="0 0 12 80"
                    aria-hidden="true"
                    style={{ flexShrink: 0, marginTop: 6 }}
                  >
                    <path
                      d="M6 0v74M1 69l5 6 5-6"
                      fill="none"
                      stroke="#2B1A14"
                      strokeWidth="1.6"
                    />
                  </svg>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      fontSize: 18,
                    }}
                  >
                    {col.items.map((t, i) => (
                      <span
                        key={t}
                        style={
                          i < 2
                            ? {
                                textDecoration: "underline",
                                textUnderlineOffset: 4,
                              }
                            : undefined
                        }
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "relative",
            marginTop: -90,
            marginRight: -10,
            transform: "rotate(2deg)",
          }}
        >
          <span
            className="l-tape"
            style={{ top: -12, left: "46%", transform: "rotate(-4deg)" }}
            aria-hidden="true"
          />
          <div className="l-shot" style={{ width: 720, maxWidth: "100%" }}>
            <Image
              src="/shots/shot-today.png"
              alt="Solo Queue Today dashboard: 38 posts queued across Threads and Instagram"
              width={1440}
              height={960}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "blur(1px)",
              }}
            />
            <span className="l-wash" aria-hidden="true" />
          </div>
          <div
            style={{
              position: "absolute",
              left: -64,
              bottom: -44,
              transform: "rotate(-5deg)",
              background: "#2B1A14",
              color: "#F4EBD9",
              borderRadius: 16,
              padding: "14px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span
              className="l-mono"
              style={{ fontSize: 11, color: "#FFD54A" }}
            >
              PER-POST FEES THIS MONTH
            </span>
            <span
              className="l-disp"
              style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}
            >
              $0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
