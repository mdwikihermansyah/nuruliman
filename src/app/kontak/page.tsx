import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Send,
} from "lucide-react";

// * Force dynamic rendering untuk menghindari error Clerk saat build
export const dynamic = "force-dynamic";

export default function KontakPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-yellow-50 via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight drop-shadow-sm">
            Daftar Kontak
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut tentang program, kegiatan,
            atau untuk berkontribusi memajukan dakwah Masjid Nurul Iman.
          </p>
        </div>

        {/* Kontak Map Layout */}
        <div className="flex flex-col xl:flex-row gap-10 items-stretch">
          {/* Informasi Kontak (Kiri, Diperbesar) */}
          <div className="w-full xl:w-1/3 flex flex-col justify-between gap-6">
            <Card className="flex-1 bg-white/90 shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700 text-xl md:text-2xl">
                  <MapPin className="h-7 w-7" />
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-base">
                <div className="flex items-start gap-4">
                  <span className="p-3 bg-yellow-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Alamat</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Jl. Nurul Iman No.68, RT.6/RW.5,
                      <br />
                      Cipedak, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta
                      <br />
                      12630
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="p-3 bg-yellow-100 rounded-lg">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Telepon</h3>
                    <p className="text-gray-700">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="p-3 bg-yellow-100 rounded-lg">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">info@masjidnuruliman.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lokasi Masjid (Kanan, Besar) */}
          <div className="w-full xl:w-2/3 flex flex-col gap-6">
            <Card className="bg-white/90 shadow-xl border-0 flex-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700 text-xl md:text-2xl">
                  <MapPin className="h-6 w-6" />
                  <span>Lokasi Masjid</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-md border">
                  <iframe
                    title="Lokasi Masjid Nurul Iman"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.275837863865!2d106.80852387634528!3d-6.350859461982853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee84b76e4ee7%3A0x1231e348cb0258b3!2sJami'%20Nurul%20Iman%20Mosque!5e0!3m2!1sen!2sid!4v1717065461124!5m2!1sen!2sid"
                    loading="lazy"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
                <a
                  href="https://www.google.com/maps/place/Jami'+Nurul+Iman+Mosque/@-6.3508594,106.8085239,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x2e69ee84b76e4ee7:0x1231e348cb0258b3!2sJami'+Nurul+Iman+Mosque!8m2!3d-6.3508594!4d106.8110988!16s%2Fg%2F11fx9ndxyx!3m5!1s0x2e69ee84b76e4ee7:0x1231e348cb0258b3!8m2!3d-6.3508594!4d106.8110988!16s%2Fg%2F11fx9ndxyx?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-center text-yellow-700 text-sm font-semibold hover:underline"
                >
                  Buka di Google Maps
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Kirim Pesan dan Media Sosial di bawahnya */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kirim Pesan (form) */}
          <div className="md:col-span-2">
            <Card className="w-full bg-gradient-to-br from-yellow-100/80 to-white shadow-xl border-0">
              <CardHeader>
                <CardTitle>
                  <span className="flex items-center gap-2 text-yellow-800">
                    <Send className="h-5 w-5" />
                    Kirim Pesan
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Nama
                    </label>
                    <Input placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Email
                    </label>
                    <Input type="email" placeholder="nama@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Subjek
                    </label>
                    <Input placeholder="Subjek pesan" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Pesan
                    </label>
                    <textarea
                      className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg py-3 rounded-md transition"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Media Sosial */}
          <div>
            <Card className="w-full bg-yellow-50 shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex gap-2 items-center text-yellow-700">
                  <span>Media Sosial</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-800">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-pink-50 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <span className="font-semibold text-gray-800">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-red-600" />
                    <span className="font-semibold text-gray-800">YouTube</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
