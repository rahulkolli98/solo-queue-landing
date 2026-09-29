const columns: {
  bg: string;
  notes: { bg: string; tilt: string; extra?: string; kicker: string; title?: string; body: string }[];
}[] = [
  {
    bg: "#8FB3DA",
    notes: [
      {
        bg: "#FBF5E8",
        tilt: "-1.5deg",
        kicker: "STORY FRAMES",
        title: "Your scripting skills, as templates",
        body: "Confession, myth-bust, build log, scene study. Save your own and reuse them.",
      },
      {
        bg: "#FFD54A",
        tilt: "1.8deg",
        extra: "marginLeft:16px",
        kicker: "VOICE",
        body: "Learns how you write from your past posts. No hype words unless you use them.",
      },
    ],
  },
  {
    bg: "#FFD54A",
    notes: [
      {
        bg: "#FBF5E8",
        tilt: "1.2deg",
        kicker: "MULTI-QUEUE",
        title: "Three posts a day, same account",
        body: "Set daily slots per platform. Queue 20 to 50 posts on each, weeks out.",
      },
      {
        bg: "#EBA3D0",
        tilt: "-2deg",
        extra: "marginRight:12px",
        kicker: "GAP FINDER",
        body: "Open slots show in coral. One click fills them from your research inbox.",
      },
    ],
  },
  {
    bg: "#F0775C",
    notes: [
      {
        bg: "#FBF5E8",
        tilt: "-0.8deg",
        kicker: "EVERGREEN",
        title: "Good posts come back around",
        body: "Mark a post evergreen and it requeues itself after a rest period.",
      },
      {
        bg: "#8FB3DA",
        tilt: "1.5deg",
        extra: "marginLeft:14px",
        kicker: "REMIX",
        body: "Turn any past Threads post into a carousel, or a reel into a thread.",
      },
    ],
  },
  {
    bg: "#EBA3D0",
    notes: [
      {
        bg: "#FBF5E8",
        tilt: "1.4deg",
        kicker: "META HEALTH",
        title: "Tokens refresh before they lapse",
        body: "Warns you well ahead of the 60-day expiry, and keeps you inside daily posting limits.",
      },
      {
        bg: "#FFD54A",
        tilt: "-1.6deg",
        extra: "marginRight:10px",
        kicker: "BLOG DRAFT",
        body: "Optional long-form draft from the same research, for your site or newsletter.",
      },
    ],
  },
];

export default function Features() {
  return (
    <section
      aria-labelledby="feat"
      className="l-section"
      style={{ paddingTop: 110, paddingBottom: 110 }}
    >
      <div className="l-section-head">
        <h2
          id="feat"
          className="l-display"
          style={{ fontSize: 82, letterSpacing: "-3.4px" }}
        >
          Small tools for
          <br />a <em>daily</em> habit.
        </h2>
        <p
          className="l-lede"
          style={{
            marginBottom: 8,
            maxWidth: 360,
            fontStyle: "italic",
            fontSize: 20,
            color: "#2B1A14",
          }}
        >
          Built by someone who posts every day and got tired of doing it by
          hand.
        </p>
      </div>
      <div
        className="l-grid-mobile-1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          marginTop: 60,
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        {columns.map((col, i) => (
          <div
            key={i}
            style={{
              background: col.bg,
              padding: "40px 26px 46px",
              display: "flex",
              flexDirection: "column",
              gap: 30,
            }}
          >
            {col.notes.map((n, j) => (
              <div
                key={j}
                className="l-pnote"
                style={{
                  background: n.bg,
                  transform: `rotate(${n.tilt})`,
                  ...(n.extra === "marginLeft:16px"
                    ? { marginLeft: 16 }
                    : n.extra === "marginRight:12px"
                      ? { marginRight: 12 }
                      : n.extra === "marginLeft:14px"
                        ? { marginLeft: 14 }
                        : n.extra === "marginRight:10px"
                          ? { marginRight: 10 }
                          : {}),
                }}
              >
                <span className="l-mono" style={{ fontSize: 11 }}>
                  {n.kicker}
                </span>
                {n.title && (
                  <span
                    className="l-disp"
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    {n.title}
                  </span>
                )}
                {n.body}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
