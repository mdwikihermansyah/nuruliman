import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Search, ArrowRight } from "lucide-react";
import Image from "next/image";

// * Force dynamic rendering untuk menghindari error Clerk saat build
export const dynamic = "force-dynamic";

export default function PerpustakaanPage() {
  return (
    <div className="pt-0 pb-20 min-h-screen bg-gray-50">
      {/* Hero Library Image Section */}
      <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden mb-[-70px]">
        {/* Background Perpustakaan Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/perpustakaan.png"
            alt="Perpustakaan Masjid Nurul Iman"
            fill
            className="object-cover object-center w-full h-full"
            priority
            sizes="100vw"
            style={{ backgroundColor: "#e5e7eb" }} // fallback warna abu-abu jika gambar belum muncul
          />
          {/* Blur overlay untuk readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        {/* Centered Icon/Text */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
          <div className="inline-block p-6 bg-yellow-100/80 rounded-full mb-6">
            <BookOpen className="h-16 w-16 text-yellow-600" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-lg mb-3">
            Perpustakaan Masjid Nurul Iman
          </h1>
          <p className="text-lg md:text-xl text-yellow-50 max-w-2xl text-center mx-auto drop-shadow">
            Perpustakaan masjid sebagai pusat pembelajaran dan referensi untuk
            jamaah dalam menuntut ilmu agama dan pengetahuan umum.
          </p>
        </div>
      </section>
      {/* Main Library Content Starts Here */}
      <div className="container mx-auto px-6">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-yellow-600" />
                Koleksi Buku
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600 mb-2">500+</p>
              <p className="text-gray-600">Judul buku tersedia</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-yellow-600" />
                Anggota Aktif
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600 mb-2">200+</p>
              <p className="text-gray-600">Anggota terdaftar</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Senin - Jumat
              </p>
              <p className="text-gray-600">08:00 - 17:00 WIB</p>
            </CardContent>
          </Card>
        </div>

        {/* Kategori Buku */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Kategori Koleksi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Tafsir Al-Quran",
              "Hadits",
              "Fiqih",
              "Aqidah",
              "Sejarah Islam",
              "Biografi",
              "Dakwah",
              "Manajemen Masjid",
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-gray-900">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Layanan */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Layanan Perpustakaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-yellow-600" />
                  Peminjaman Buku
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anggota dapat meminjam buku dengan durasi maksimal 7 hari.
                  Perpanjangan dapat dilakukan dengan menghubungi pengelola
                  perpustakaan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-yellow-600" />
                  Ruang Baca
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tersedia ruang baca yang nyaman untuk jamaah yang ingin
                  membaca atau belajar di perpustakaan dengan fasilitas lengkap.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-yellow-600" />
                  Diskusi & Kajian
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Perpustakaan juga menyediakan ruang untuk diskusi dan kajian
                  buku yang dapat digunakan oleh kelompok belajar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-yellow-600" />
                  Katalog Digital
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Semua koleksi buku telah terdaftar dalam katalog digital yang
                  dapat diakses untuk memudahkan pencarian buku.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Tertarik Menjadi Anggota?
              </h3>
              <p className="mb-6 text-yellow-50">
                Daftarkan diri Anda sekarang dan nikmati akses ke seluruh
                koleksi perpustakaan Masjid Jogokariyan.
              </p>
              <Button
                variant="outline"
                className="bg-white text-yellow-600 hover:bg-gray-100 border-white"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
