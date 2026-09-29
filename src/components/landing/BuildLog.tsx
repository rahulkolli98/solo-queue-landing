export default function BuildLog() {
  return (
    <section
      aria-labelledby="why"
      className="l-section l-grid-mobile-1"
      style={{
        paddingTop: 0,
        paddingBottom: 110,
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        gap: 60,
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span
          className="l-mono"
          style={{
            fontSize: 13,
            letterSpacing: "0.1em",
            color: "#A3361F",
          }}
        >
          BUILT IN PUBLIC
        </span>
        <h2
          id="why"
          className="l-display"
          style={{ fontSize: 70, lineHeight: 0.96, letterSpacing: "-2.8px" }}
        >
          Made by someone who was <em>paying the fee.</em>
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 18,
            lineHeight: 1.55,
            color: "#6B5146",
            maxWidth: 520,
          }}
        >
          From the maker of flofield and postship. Solo Queue started as the
          tool I needed for my own posting, and I&apos;m sharing every step
          of the build.
        </p>
        <a
          href="#"
          className="lbtn"
          style={{ alignSelf: "flex-start", marginTop: 8 }}
        >
          Follow the build on Threads
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
      <div style={{ position: "relative", height: 420 }}>
        <div
          className="l-pnote"
          style={{
            position: "absolute",
            left: 20,
            top: 10,
            width: 400,
            maxWidth: "90%",
            background: "#FBF5E8",
            padding: "28px 30px 30px 48px",
            transform: "rotate(-2.5deg)",
          }}
        >
          <span
            className="l-pnote-tape"
            style={{ left: "44%", background: "rgba(240,119,92,0.8)" }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 18,
              top: 34,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#5E8FC2",
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 18,
              bottom: 34,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#5E8FC2",
            }}
          />
          <span className="l-mono" style={{ fontSize: 11 }}>
            BUILD LOG · DAY 1
          </span>
          <p
            style={{
              margin: 0,
              fontStyle: "italic",
              fontSize: 20,
              lineHeight: 1.35,
            }}
          >
            I built a scheduler that charges per post. Then I became its
            heaviest user. This is the one that doesn&apos;t.
          </p>
          <span style={{ fontStyle: "italic", color: "#6B5146" }}>
            — the founder of flofield &amp; postship
          </span>
        </div>
        <div
          className="l-pnote"
          style={{
            position: "absolute",
            right: 0,
            top: 190,
            width: 250,
            background: "#FFD54A",
            transform: "rotate(3deg)",
          }}
        >
          <span className="l-mono" style={{ fontSize: 11 }}>
            DAY 61
          </span>
          Tokens expired mid-queue. Now the app warns you three weeks early.
        </div>
        <div
          className="l-pnote"
          style={{
            position: "absolute",
            left: 90,
            bottom: 0,
            width: 230,
            background: "#EBA3D0",
            transform: "rotate(-1deg)",
          }}
        >
          <span className="l-mono" style={{ fontSize: 11 }}>
            DAY 6
          </span>
          The queue view ships. Gaps finally visible.
        </div>
      </div>
    </section>
  );
}
