"use client";

import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { waitlistCountRef, waitlistJoinRef } from "@/lib/waitlist";

type Phase = "idle" | "sending" | "done" | "error";

export default function WaitlistForm() {
  const count = useQuery(waitlistCountRef, {});
  const join = useMutation(waitlistJoinRef);
  const [email, setEmail] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (phase === "sending") return;
    setPhase("sending");
    setMessage(null);
    try {
      const r = await join({ email, source: "landing" });
      setPhase("done");
      setMessage(
        r.status === "joined"
          ? "You're on the list — watch your inbox."
          : "You're already on the list — watch your inbox."
      );
    } catch (err) {
      setPhase("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong — try again."
      );
    }
  }

  if (phase === "done") {
    return (
      <p role="status" style={{ position: "relative", fontSize: 18, fontWeight: 600, margin: "20px 0 0" }}>
        {message}
      </p>
    );
  }

  return (
    <div style={{ position: "relative", marginTop: 20, width: "100%", maxWidth: 560 }}>
      <form className="l-email-form" onSubmit={submit}>
        <label htmlFor="em" className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
          Email address
        </label>
        <input
          id="em"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourproduct.com"
          disabled={phase === "sending"}
        />
        <button type="submit" className="lbtn dark" disabled={phase === "sending"}>
          {phase === "sending" ? "Joining…" : "Get early access"}
        </button>
      </form>
      <p style={{ position: "relative", margin: "14px 0 0", fontSize: 14 }}>
        {message ? (
          <span role={phase === "error" ? "alert" : "status"}>{message}</span>
        ) : (
          count !== undefined &&
          count > 0 && (
            <span>
              Join {count} early builder{count === 1 ? "" : "s"} already waiting.
            </span>
          )
        )}
      </p>
    </div>
  );
}
