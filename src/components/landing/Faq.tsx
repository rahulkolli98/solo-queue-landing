const faqs = [
  {
    q: "Does it actually post for me?",
    a: "Yes. Posts go out on schedule through Meta's official Threads and Instagram publishing APIs, connected to your own accounts. No browser extension, no copy and paste.",
    open: true,
  },
  {
    q: "What kind of Instagram account do I need?",
    a: "Instagram only allows API publishing from professional accounts, so you'll need a Creator or Business account. Switching is free and takes a minute.",
  },
  {
    q: "Is there really no per-post fee?",
    a: "Really. You pay one flat monthly price. Meta's own daily limits (250 Threads posts and 100 Instagram posts per day) are far above what one person posts.",
  },
  {
    q: "Will the writing sound like me?",
    a: "It learns from posts you've already written and follows the story frames you choose. Every draft stays editable before it's queued.",
  },
  {
    q: "What about X, YouTube or LinkedIn?",
    a: "Threads and Instagram come first so they can be done properly. Other platforms are on the roadmap, shared in the build log as they happen.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faqh"
      className="l-section l-grid-mobile-1"
      style={{
        paddingTop: 0,
        paddingBottom: 110,
        display: "grid",
        gridTemplateColumns: "380px minmax(0, 1fr)",
        gap: 60,
      }}
    >
      <h2
        id="faqh"
        className="l-display"
        style={{ fontSize: 70, lineHeight: 0.96, letterSpacing: "-2.8px" }}
      >
        Fair <em>questions.</em>
      </h2>
      <div style={{ borderBottom: "1.5px solid #2B1A14" }}>
        {faqs.map((f) => (
          <details key={f.q} className="l-faq" open={f.open}>
            <summary>
              {f.q}
              <span className="l-mono" style={{ fontSize: 22 }} aria-hidden="true">
                {f.open ? "–" : "+"}
              </span>
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
