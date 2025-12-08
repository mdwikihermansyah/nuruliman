"use client";

import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import Link from "next/link";
import { LayoutDashboard, PenBox } from "lucide-react";

// * Dynamic import untuk komponen Clerk agar aman saat build tanpa Clerk key
// * Menggunakan ssr: false untuk mencegah error saat build
const SignedIn = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignedIn),
  { ssr: false }
);

const SignedOut = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignedOut),
  { ssr: false }
);

const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { ssr: false }
);

const SignInButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignInButton),
  { ssr: false }
);

interface AuthSectionProps {
  role: "ADMIN" | "USER";
  isMobile?: boolean;
}

export const AuthSection = ({ role, isMobile = false }: AuthSectionProps) => {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // * Jika Clerk tidak tersedia, render fallback UI
  if (!clerkPublishableKey) {
    if (isMobile) {
      return (
        <div className="flex flex-col space-y-2 pt-4 border-t">
          <Link href="/dashboard" className="w-full">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LayoutDashboard size={18} />
              Dashboard
            </Button>
          </Link>
          {role === "ADMIN" && (
            <Link href="/transaction/create" className="w-full">
              <Button className="w-full justify-start gap-2 bg-yellow-500 hover:bg-yellow-600">
                <PenBox size={18} />
                Add Transaction
              </Button>
            </Link>
          )}
        </div>
      );
    }
    return (
      <div className="ml-4 flex items-center space-x-3 border-l pl-4">
        <Link href="/dashboard">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <LayoutDashboard size={16} />
            Dashboard
          </Button>
        </Link>
        {role === "ADMIN" && (
          <Link href="/transaction/create">
            <Button
              size="sm"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600"
            >
              <PenBox size={16} />
              Add Transaction
            </Button>
          </Link>
        )}
      </div>
    );
  }

  // * Render dengan komponen Clerk jika tersedia
  // * Dynamic import dengan ssr: false akan mencegah error saat build
  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2 pt-4 border-t">
        <SignedIn>
          <Link href="/dashboard" className="w-full">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LayoutDashboard size={18} />
              Dashboard
            </Button>
          </Link>
          {role === "ADMIN" && (
            <Link href="/transaction/create" className="w-full">
              <Button className="w-full justify-start gap-2 bg-yellow-500 hover:bg-yellow-600">
                <PenBox size={18} />
                Add Transaction
              </Button>
            </Link>
          )}
        </SignedIn>
        <SignedOut>
          <SignInButton forceRedirectUrl={"/dashboard"}>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    );
  }

  return (
    <div className="ml-4 flex items-center space-x-3 border-l pl-4">
      <SignedIn>
        <Link href="/dashboard">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <LayoutDashboard size={16} />
            Dashboard
          </Button>
        </Link>
        {role === "ADMIN" && (
          <Link href="/transaction/create">
            <Button
              size="sm"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600"
            >
              <PenBox size={16} />
              Add Transaction
            </Button>
          </Link>
        )}
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-9 h-9",
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton forceRedirectUrl={"/dashboard"}>
          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600">
            Login
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

