import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transactions(.*)",
]);

// * Create Arcjet middleware dengan fallback untuk build time
let aj: ReturnType<typeof arcjet> | null = null;
if (process.env.ARCJET_KEY) {
  try {
    aj = arcjet({
      key: process.env.ARCJET_KEY,
      rules: [
        shield({ mode: "LIVE" }),
        detectBot({
          mode: "LIVE",
          allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
        }),
      ],
    });
  } catch (error) {
    console.warn("Arcjet initialization failed:", error);
  }
}

// Middleware dari Clerk dengan fallback
const clerk = clerkMiddleware(async (auth, req) => {
  try {
    const { userId, redirectToSignIn } = await auth();

    if (!userId && isProtectedRoute(req)) {
      return redirectToSignIn();
    }

    return NextResponse.next();
  } catch (error) {
    // * Jika Clerk tidak tersedia, allow request untuk build time
    console.warn("Clerk middleware error:", error);
    return NextResponse.next();
  }
});

// * Gabungkan middleware dengan fallback jika Arcjet tidak tersedia
export default aj
  ? createMiddleware(aj, clerk)
  : clerk;

// Config untuk middleware agar match route yang diinginkan
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
