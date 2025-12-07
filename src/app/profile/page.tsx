import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Building2, MapPin, Calendar, Users, BookOpen } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Profil Masjid Nurul Iman
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Berawal dari sebuah mushola kecil di Cipedak, Jakarta Selatan, Nurul
            Iman terus berusaha membangun Ummat dan Mensejahterakan Masyarakat.
          </p>
        </div>

        {/* Logo Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8">
            <CardContent className="text-center">
              <div className="mb-6">
                <Image
                  src="/mjnilogo_l.png"
                  alt="Logo Masjid Nurul Iman"
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <br />
                Berawal dari sebuah mushola kecil di Cipedak, Jakarta Selatan,
                Nurul Iman telah berkembang menjadi pusat dakwah dan
                pemberdayaan masyarakat.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Program Unggulan */}
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
            Program Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-yellow-600" />
                  Relawan Masjid Internasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bekerjasama dengan berbagai Organisasi untuk memberikan
                  bantuan baik di dalam negeri ataupun di luar Negeri seperti
                  Palestina, Rohingnya, Turki dll.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-yellow-600" />
                  Suffah Masjid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tempat menginap tamu masjid syar'i di kompleks Masjid Nurul
                  Iman dengan fasilitas yang cukup memadai, kamu bisa menikmati
                  pemandangan jogja dari lantai 3 Masjid Nurul Iman.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                  Event Kampoeng Ramadhan Nurul Iman
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Event Tahunan Masjid Nurul Iman yang diadakan setiap bulan
                  Ramadhan yang mempunyai banyak acara seperti Pasar Sore dan
                  Buka Bersama 3000 Porsi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Lokasi & Visi Misi Section - Full Width with Max Width for Padding */}
        <div className="w-full bg-gray-50 mt-16 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            {/* Lokasi Card */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
              <div className="flex-1 p-8 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-yellow-600" />
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    Lokasi
                  </span>
                </div>
                <p className="text-gray-600">
                  Jl. Nurul Iman No.68, RT.6/RW.5, Cipedak, Kec. Jagakarsa, Kota
                  Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630
                </p>
              </div>
              <div className="flex-1 min-w-0 p-8 flex justify-center">
                <Image
                  src="/indorNIM.png"
                  alt="Lokasi Masjid Nurul Iman"
                  width={400}
                  height={260}
                  className="rounded-lg shadow-lg object-cover w-full max-w-xs md:max-w-md"
                />
              </div>
            </div>

            {/* Visi Misi Card */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex-1 min-w-0 p-8 flex justify-center order-2 md:order-1">
                <Image
                  src="/visimisi.png"
                  alt="Visi Misi Masjid"
                  width={400}
                  height={260}
                  className="rounded-lg shadow-lg object-cover w-full max-w-xs md:max-w-md"
                />
              </div>
              <div className="flex-1 min-w-0 p-8 order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-yellow-600" />
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    Visi & Misi
                  </span>
                </div>
                <p className="text-gray-600">
                  Membangun Ummat dan Mensejahterakan Masyarakat melalui
                  manajemen masjid yang modern dan inovatif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
