import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transactions(.*)",
]);

// * Middleware hanya menggunakan Clerk untuk mengurangi bundle size
// * Arcjet akan di-handle di API routes jika diperlukan
export default clerkMiddleware(async (auth, req) => {
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

// Config untuk middleware agar match route yang diinginkan
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
