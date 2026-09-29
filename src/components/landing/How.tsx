import Image from "next/image";

const steps = [
  {
    time: "08:00",
    title: "Save the research",
    body: "Drop links, quotes, screenshots and half-thoughts into your inbox all week. Each topic gets a brief and a few angles worth trying.",
    pill: "RESEARCH",
    bg: "#8FB3DA",
    tilt: "-1.2deg",
    offset: 0,
    shot: "/shots/shot-research.png",
    shotAlt: "Solo Queue Research inbox: topics with sources and angles",
  },
  {
    time: "08:10",
    title: "One topic in, both out",
    body: "Pick a story frame. Get a Threads thread and an Instagram reel script or carousel, each written for its platform, in your voice.",
    pill: "STUDIO",
    bg: "#F0775C",
    tilt: "0.8deg",
    offset: 50,
    shot: "/shots/shot-studio.png",
    shotAlt: "Solo Queue Studio: Threads thread and Instagram reel script side by side",
  },
  {
    time: "08:20",
    title: "Queue weeks ahead",
    body: "Drafts drop into your posting slots. Gaps show up in coral, and posts go out on time through Meta's official APIs.",
    pill: "QUEUE",
    bg: "#FFD54A",
    tilt: "-0.6deg",
    offset: 100,
    shot: "/shots/shot-queue.png",
    shotAlt: "Solo Queue week view: scheduled Threads and Instagram slots",
  },
];

export default function How() {
  return (
    <section
      id="how"
      aria-labelledby="howh"
      className="l-section"
      style={{ paddingTop: 110, paddingBottom: 100 }}
    >
      <div className="l-section-head">
        <div>
          <span
            className="l-mono"
            style={{
              fontSize: 13,
              letterSpacing: "0.1em",
              color: "#A3361F",
            }}
          >
            HOW IT WORKS
          </span>
          <h2
            id="howh"
            className="l-display"
            style={{ marginTop: 14, fontSize: 82 }}
          >
            A week of posts,
            <br />
            <em>before</em> the coffee cools.
          </h2>
        </div>
        <p className="l-lede" style={{ marginBottom: 10, maxWidth: 380 }}>
          Three steps, about twenty minutes. Save what you read, turn one
          topic into both platforms, and let the queue do the posting.
        </p>
      </div>
      <div
        className="l-grid-mobile-1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 28,
          marginTop: 64,
          alignItems: "start",
        }}
      >
        {steps.map((s) => (
          <article
            key={s.title}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              marginTop: s.offset,
            }}
          >
            <div
              style={{
                background: s.bg,
                borderRadius: 6,
                height: 220,
                boxSizing: "border-box",
                overflow: "hidden",
                transform: `rotate(${s.tilt})`,
                boxShadow: "0 3px 0 rgba(43,26,20,0.16)",
                position: "relative",
              }}
              aria-hidden="true"
            >
              <Image
                src={s.shot}
                alt=""
                width={1440}
                height={960}
                sizes="(max-width: 900px) 100vw, 480px"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top left",
                  filter: "blur(1px)",
                }}
              />
            </div>
            <div className="l-row" style={{ gap: 12, alignItems: "baseline" }}>
              <span
                className="l-mono"
                style={{ fontSize: 14, color: "#A3361F" }}
              >
                {s.time}
              </span>
              <h3
                className="l-disp"
                style={{
                  margin: 0,
                  fontSize: 30,
                  fontWeight: 700,
                  letterSpacing: "-0.6px",
                }}
              >
                {s.title}
              </h3>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.55,
                color: "#6B5146",
              }}
            >
              {s.body}
            </p>
            <span
              className="l-mono"
              style={{
                alignSelf: "flex-start",
                fontSize: 11,
                height: 26,
                padding: "0 12px",
                borderRadius: 13,
                background: s.bg,
                display: "inline-flex",
                alignItems: "center",
                letterSpacing: "0.08em",
              }}
            >
              {s.pill}
            </span>
          </article>
        ))}
      </div>
      <div style={{ position: "relative", marginTop: 56, height: 40 }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 8,
            height: 2,
            background: "#D6C4A6",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#C8412B",
          }}
        />
        <div
          className="l-mono"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 26,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: "#6B5146",
          }}
        >
          <span>08:00 · SAVE</span>
          <span>08:10 · WRITE</span>
          <span>08:20 · QUEUE</span>
          <span>08:21 · BACK TO BUILDING</span>
        </div>
      </div>
    </section>
  );
}
