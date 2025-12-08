"use client";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "./header";

interface HeaderClientWrapperProps {
  role: "ADMIN" | "USER";
}

const HeaderClientWrapper = ({ role }: HeaderClientWrapperProps) => {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // * Jika Clerk tidak tersedia, render Header tanpa ClerkProvider
  if (!clerkPublishableKey) {
    return <Header role={role} />;
  }

  // * Render Header dengan ClerkProvider untuk komponen Clerk
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <Header role={role} />
    </ClerkProvider>
  );
};

export default HeaderClientWrapper;

