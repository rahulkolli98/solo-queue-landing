const pains = [
  {
    n: "01 · REFORMATTING",
    color: "#F0775C",
    title: "Every platform wants a different post.",
    body: "A 500-character Threads post and a 30-second reel script are not the same idea resized. Doing both, daily, eats the hours you meant to spend building.",
  },
  {
    n: "02 · SAME-DAY POSTING",
    color: "#FFD54A",
    title: "Cross-posting is not a queue.",
    body: "Most tools blast one post everywhere, once. Posting three times a day to the same account, weeks ahead, is a different job.",
  },
  {
    n: "03 · PER-POST PRICING",
    color: "#8FB3DA",
    title: "Fees that punish consistency.",
    body: "When every scheduled post costs money, the people who post most pay most. That's backwards for anyone building an audience from zero.",
  },
];

export default function Pain() {
  return (
    <section className="l-pain l-section" aria-labelledby="pain">
      <span className="l-eyebrow" style={{ color: "#FFD54A" }}>
        The daily grind
      </span>
      <h2
        id="pain"
        className="l-disp"
        style={{
          margin: "18px 0 0",
          maxWidth: 1100,
          fontSize: 76,
          lineHeight: 0.98,
          fontWeight: 800,
          letterSpacing: -3,
        }}
      >
        You research for an hour. Rewrite it four times.{" "}
        <span style={{ color: "#F0775C" }}>Then pay a fee to post it.</span>
      </h2>
      <div
        className="l-grid-mobile-1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 20,
          marginTop: 64,
        }}
      >
        {pains.map((p) => (
          <div
            key={p.n}
            className="l-pain-col"
            style={{ borderTopColor: p.color }}
          >
            <span
              className="l-mono"
              style={{ fontSize: 13, color: p.color }}
            >
              {p.n}
            </span>
            <span
              className="l-disp"
              style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}
            >
              {p.title}
            </span>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.55,
                color: "#BFAE98",
              }}
            >
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
