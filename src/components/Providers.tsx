"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useMemo } from "react";
import { convexUrl } from "@/lib/waitlist";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  // SSR-safe: Convex queries resolve during prerender against the shared
  // backend; mutations only ever fire from event handlers in the browser.
  const client = useMemo(() => new ConvexReactClient(convexUrl()), []);
  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}
