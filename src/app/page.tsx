import HeroSection from "@/components/hero";
import { featuresSistem } from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Users,
  Heart,
  Download,
  ArrowRight,
  Building2,
  Handshake,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Three Column Cards Section - Appears after scroll */}
      <section className="relative -mt-16 md:-mt-24 z-20 px-4 mb-8">
        <div className="container mx-auto max-w-6xl">
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden bg-white">
            <CardContent className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Tentang Kami */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-yellow-100 rounded-full">
                      <Building2 className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Tentang Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Berawal dari sebuah Mushola kecil di Cipedak, Jakarta
                    Selatan, Nurul Iman terus berusaha membangun Ummat dan
                    Mensejahterakan Masyarakat.
                  </p>
                </div>

                {/* Manajemen Masjid */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-yellow-100 rounded-full">
                      <BookOpen className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Manajemen Masjid
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Nurul Iman berusaha menerapkan manajemen masjid zaman
                    rasulullah dengan aplikasi di zaman modern dan dengan
                    inovatif sehingga bisa diterima oleh masyarakat.
                  </p>
                </div>

                {/* Support */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-yellow-100 rounded-full">
                      <Handshake className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Support dakwah kami dengan sedekah, infaq, zakat dan wakaf
                    di Nurul Iman. Semoga Allah selalu melimpahkan barokah
                    kepada Anda sekeluarga.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Profil Masjid Section */}
      <section className="py-24 bg-gradient-to-b from-yellow-100 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute -top-16 left-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-white/70 rounded-2xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-8 border border-yellow-100 backdrop-blur-md">
            <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-yellow-600 tracking-tight drop-shadow-sm">
                Profil Masjid Jami Nurul Iman
              </h2>
              <div className="mb-4 flex items-center gap-2 justify-center md:justify-start">
                <span className="w-5 h-5 bg-yellow-500 rounded-full animate-pulse" />
                <span className="w-3 h-3 bg-yellow-300 rounded-full animate-ping" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Masjid Jami Nurul Iman telah menjadi pusat transformasi
                masyarakat dan pemberdayaan ummat dengan semangat Islam yang
                ramah dan membumi. Berdiri sejak tahun 1966, Masjid Jami Nurul
                Iman berawal dari sebuah mushola kecil di Cipedak, Jakarta
                Selatan, yang kini terus menebarkan manfaat luas bagi seluruh
                warga sekitar.
                <br />
                Logo Masjid Jami Nurul Iman memuat filosofi dari tiga bahasa —
                Arab, Indonesia, dan Jawa — yang melambangkan perpaduan nilai
                keislaman, kearifan lokal, serta semangat persatuan dalam
                membangun masa depan ummat.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-medium shadow">
                  #TransformasiUmmat
                </span>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium shadow">
                  #BerkahBersama
                </span>
                <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium shadow">
                  #KearifanLokal
                </span>
              </div>
              <Link href="/profile">
                <Button
                  variant="ghost"
                  size="lg"
                  className="mt-3 border border-yellow-300 text-yellow-700 hover:bg-yellow-200"
                >
                  Selengkapnya Tentang Masjid{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-200 bg-white">
                <Image
                  src="/masjid-hero.png"
                  width={320}
                  height={320}
                  className="object-cover w-80 h-72 md:w-96 md:h-80"
                  alt="Masjid Jami Nurul Iman"
                  priority
                />
                <span className="absolute bottom-3 right-3 bg-yellow-500 rounded-full px-4 py-1 text-xs text-white font-bold shadow-lg shadow-yellow-500/50">
                  Sejak 1966
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manajemen Masjid Section */}
      <section className="py-24 relative bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 w-full h-24 bg-gradient-to-r from-yellow-200 via-transparent to-blue-100 opacity-50 rotate-3 -z-10" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-yellow-600 tracking-tight drop-shadow">
              Manajemen Masjid Modern
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fondasi kokoh, tata kelola profesional, dan inovasi pelayanan:
              Jogokariyan menginspirasi ribuan masjid untuk menjadi pusat
              peradaban — bukan sekadar tempat ibadah.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 z-10">
            <Card className="p-8 hover:shadow-lg transition-shadow border border-yellow-100">
              <CardContent className="space-y-4 flex flex-col items-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 shadow">
                  <BookOpen className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-yellow-700">ATM Beras</h3>
                <p className="text-gray-600 text-center">
                  Melayani mustahik dengan distribusi beras otomatis khusus
                  keluarga prasejahtera & santri. Masjid hadir langsung untuk
                  keadilan sosial!
                </p>
                <span className="inline-block text-[12px] text-yellow-500 bg-yellow-100 px-2 py-1 rounded font-semibold mt-2">
                  Program Unggulan
                </span>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border border-yellow-100">
              <CardContent className="space-y-4 flex flex-col items-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 shadow">
                  <Users className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-yellow-700">
                  Jamaah Mandiri
                </h3>
                <p className="text-gray-600 text-center">
                  Pelatihan intensif ibadah untuk masyarakat, bimbingan muallaf,
                  hingga sekolah gratis. Wujud nyata pendidikan spiritual
                  berbasis masjid.
                </p>
                <span className="inline-block text-blue-700 bg-blue-100 px-2 py-1 rounded text-[12px] font-medium mt-2">
                  Edukasi & Empowerment
                </span>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border border-yellow-100">
              <CardContent className="space-y-4 flex flex-col items-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 shadow">
                  <Heart className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-yellow-700">
                  Pionir Kampoeng Ramadhan
                </h3>
                <p className="text-gray-600 text-center">
                  Inisiator{" "}
                  <span className="font-semibold text-yellow-600">
                    Kampoeng Ramadhan
                  </span>{" "}
                  terbesar — pasar sore, buka bersama ribuan jamaah, hingga
                  festival budaya Islami yang dinanti masyarakat.
                </p>
                <span className="inline-block text-pink-700 bg-pink-100 px-2 py-1 rounded text-[12px] font-medium mt-2">
                  Social Movement
                </span>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-14">
            <Link href="/events">
              <Button
                size="lg"
                className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 rounded-xl shadow-lg"
              >
                Lihat Event Inspiratif
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 bg-yellow-200 opacity-40 rounded-full blur-2xl pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-yellow-600">
              Jadilah Bagian dari Perubahan!
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Bergabunglah sebagai donatur dan relawan untuk mendukung dakwah,
              pendidikan, dan aksi sosial Masjid Jogokariyan. Amanah Anda
              menjadi kekuatan perubahan nyata — 100% donasi terdistribusikan
              tepat sasaran.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              <Link href="/program">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 shadow-yellow-300 text-white px-6 py-3 rounded-lg"
                >
                  Lihat Seluruh Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/kontak">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-500 text-yellow-600 hover:bg-yellow-100 shadow"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download Materi Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-500/90 via-yellow-400/80 to-yellow-600/80 relative">
        <div className="absolute -left-20 bottom-10 w-48 h-48 bg-white opacity-20 rounded-full blur-2xl pointer-events-none z-0" />
        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-4xl mx-auto rounded-3xl p-12 text-center text-white shadow-2xl bg-gradient-to-b from-yellow-600/90 to-yellow-500/60 border-2 border-yellow-300/40">
            <Download className="h-16 w-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide">
              GRATIS! Download Materi Manajemen Masjid
            </h2>
            <p className="text-lg mb-8 text-yellow-50">
              Temukan rahasia sukses membangun masjid makmur, sistem finansial
              yang transparan, hingga inspirasi tata kelola dakwah efektif.
              Ebook inspiratif & video pembelajaran untuk seluruh takmir
              Indonesia.
            </p>
            <a
              href="https://bit.ly/materi-masjid-jogokariyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-yellow-700 hover:bg-yellow-50 border-white px-8 py-4 font-bold text-xl shadow-lg shadow-yellow-500/40"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Sekarang
              </Button>
            </a>
            <div className="mt-6 text-xs text-yellow-100/80">
              * Materi digital, 100% gratis. Sebarkan kebaikan!
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Utama Sistem Section */}
      <section className="py-24 bg-gray-50 relative overflow-x-hidden">
        <div className="absolute -top-12 -right-24 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-black mb-16 text-center text-yellow-600 drop-shadow tracking-tight">
            Fitur Unggulan Sistem Digital
          </h3>
          <div className="grid grid-cols-1 md:grid-colßs-2 lg:grid-cols-3 gap-10">
            {featuresSistem.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-7 border-2 border-yellow-100 hover:shadow-2xl transition-shadow bg-white/80 rounded-2xl"
                >
                  <CardContent className="space-y-4 pt-4 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-yellow-50 shadow mb-2">
                      <IconComponent className="h-8 w-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-yellow-600">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-normal">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/daftar">
              <Button
                size="lg"
                className="bg-yellow-600 text-white hover:bg-yellow-700 px-7 py-4 rounded-full font-semibold shadow-lg"
              >
                Daftar Akun Takmir Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
