import { makeFunctionReference } from "convex/server";

/**
 * Typed references to the shared solo-queue backend. The functions live in
 * the solo-queue repo's convex/ and deploy with it; this site only calls
 * them cross-origin via NEXT_PUBLIC_CONVEX_URL (the prod deployment URL).
 */
export const waitlistJoinRef = makeFunctionReference<
  "mutation",
  { email: string; source?: string },
  { status: "joined" | "exists" }
>("waitlist:join");

export const waitlistCountRef = makeFunctionReference<
  "query",
  Record<string, never>,
  number
>("waitlist:count");

export function convexUrl(): string {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL is not set.");
  return url;
}
