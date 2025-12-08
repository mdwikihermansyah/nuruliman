import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import HeaderWrapper from "@/components/header-wrapper";

// Font Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Masjid Finance",
  description: "Finance Platform Masjid Al-Kautsar SMKN 2 Kota Bekasi",
};

// * Wrapper untuk ClerkProvider dengan fallback untuk build time
function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // * Jika tidak ada publishableKey, render tanpa ClerkProvider (untuk build time)
  if (!clerkPublishableKey) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      {children}
    </ClerkProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProviderWrapper>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          {/* Header */}
          <HeaderWrapper />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          {/* Footer */}
          <Footer />
        </body>
      </html>
    </ClerkProviderWrapper>
  );
}
