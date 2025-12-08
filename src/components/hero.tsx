"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [blurAmount, setBlurAmount] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // * Menghitung blur amount berdasarkan scroll position
      // * Blur mulai muncul setelah scroll 50px dan maksimal di 300px
      const maxScroll = 300;
      const blurProgress = Math.min(currentScrollY / maxScroll, 1);

      // * Blur dari 0px sampai 12px
      setBlurAmount(blurProgress * 12);

      // * Overlay opacity dari 0 sampai 0.4
      setOverlayOpacity(blurProgress * 0.4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/masjid-hero.png"
          alt="MasjidNurul Iman"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Blur overlay yang muncul saat scroll */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            backdropFilter: `blur(${blurAmount}px)`,
            WebkitBackdropFilter: `blur(${blurAmount}px)`,
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          }}
        />
        {/* Gradient overlay tetap */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Centered Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <h1 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center drop-shadow-lg mb-2">
          MASJID JAMI <br className="hidden md:block" />
          NURUL IMAN <br className="hidden md:block" />
          <span className="text-yellow-600 text-2xl">
            CIPEDAK, JAKARTA SELATAN
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
