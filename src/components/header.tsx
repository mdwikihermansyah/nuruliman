"use client";

import { Menu, ChevronDown } from "lucide-react";
import { AuthSection } from "./auth-section";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = ({ role }: { role: "ADMIN" | "USER" }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b shadow-sm">
      <nav className="container mx-auto px-4 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={"/logo-mjni-d.png"}
            alt="logo nurul iman"
            width={100}
            height={300}
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Navigation Links */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
              isActive("/") ? "text-yellow-600" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/profile"
            className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
              isActive("/profile") ? "text-yellow-600" : "text-gray-700"
            }`}
          >
            Profile
          </Link>
          <Link
            href="/artikel"
            className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
              isActive("/artikel") ? "text-yellow-600" : "text-gray-700"
            }`}
          >
            Artikel
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors focus:outline-none">
              Organisasi
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/organisasi/perpustakaan">Perpustakaan</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/kontak"
            className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
              isActive("/kontak") ? "text-yellow-600" : "text-gray-700"
            }`}
          >
            Daftar Kontak
          </Link>

          {/* Auth Section */}
          <AuthSection role={role} />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col p-6 space-y-6 w-[300px]"
            >
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
              </SheetHeader>

              {/* Navigation Links Mobile */}
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/")
                      ? "bg-yellow-100 text-yellow-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/profile"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/profile")
                      ? "bg-yellow-100 text-yellow-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Profile
                </Link>
                <Link
                  href="/artikel"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/artikel")
                      ? "bg-yellow-100 text-yellow-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Artikel
                </Link>
                <Link
                  href="/organisasi/perpustakaan"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/organisasi/perpustakaan")
                      ? "bg-yellow-100 text-yellow-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Organisasi - Perpustakaan
                </Link>
                <Link
                  href="/kontak"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/kontak")
                      ? "bg-yellow-100 text-yellow-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Daftar Kontak
                </Link>
              </div>

              {/* Auth Menu Items */}
              <AuthSection role={role} isMobile />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Header;
