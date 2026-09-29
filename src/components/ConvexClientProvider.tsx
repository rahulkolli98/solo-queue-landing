"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useMemo } from "react";
import { convexUrl } from "@/lib/waitlist";

export default function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useMemo(() => new ConvexReactClient(convexUrl()), []);
  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}
