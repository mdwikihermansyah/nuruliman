import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// * Mock data - nanti bisa diganti dengan data dari database
const articles: Record<
  string,
  {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
  }
> = {
  "1": {
    id: 1,
    title: "Manajemen Masjid Zaman Rasulullah",
    content: `
      <p class="mb-4">Manajemen masjid pada zaman Rasulullah SAW memiliki prinsip-prinsip yang sangat relevan hingga saat ini. Rasulullah SAW mengajarkan bahwa masjid bukan hanya tempat ibadah, tetapi juga pusat peradaban dan pemberdayaan ummat.</p>
      
      <p class="mb-4">Beberapa prinsip utama manajemen masjid zaman Rasulullah meliputi:</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">1. Transparansi Keuangan</h3>
      <p class="mb-4">Rasulullah SAW selalu memastikan bahwa setiap dana yang masuk dan keluar dari masjid dicatat dengan jelas dan dapat dipertanggungjawabkan. Prinsip ini menjadi dasar bagi manajemen masjid modern.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">2. Pemberdayaan Masyarakat</h3>
      <p class="mb-4">Masjid pada zaman Rasulullah menjadi pusat pembelajaran, diskusi, dan pengembangan masyarakat. Masjid Jogokariyan mengadopsi prinsip ini dengan berbagai program pemberdayaan.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">3. Inklusivitas</h3>
      <p class="mb-4">Masjid terbuka untuk semua kalangan, tanpa memandang status sosial atau ekonomi. Semua jamaah memiliki hak yang sama untuk berpartisipasi dalam kegiatan masjid.</p>
      
      <p class="mb-4 mt-6">Dengan mengadopsi prinsip-prinsip ini, Masjid Jogokariyan berusaha menerapkan manajemen masjid zaman rasulullah dengan aplikasi di zaman modern dan dengan inovatif sehingga bisa diterima oleh masyarakat.</p>
    `,
    author: "Ustadz Ahmad",
    date: "15 Desember 2024",
    category: "Manajemen",
  },
  "2": {
    id: 2,
    title: "Pentingnya Transparansi Keuangan Masjid",
    content: `
      <p class="mb-4">Transparansi keuangan masjid adalah kunci untuk membangun kepercayaan jamaah dan memastikan amanah tersalurkan dengan baik.</p>
      
      <p class="mb-4">Beberapa hal yang perlu dilakukan untuk meningkatkan transparansi keuangan masjid:</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">1. Penyusunan Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disusun secara teratur dan disertai dengan catatan penjelasan yang jelas untuk memudahkan pemahaman.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">2. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">3. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">4. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">5. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">6. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">7. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">8. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">9. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">10. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">11. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
      <h3 class="text-2xl font-bold mb-3 mt-6">12. Penyajian Laporan Keuangan</h3>
      <p class="mb-4">Laporan keuangan harus disajikan dengan bahasa yang mudah dipahami oleh semua pihak.</p>
    `,
    author: "Ustadzah Fatimah",
    date: "10 Desember 2024",
    category: "Keuangan",
  },
  "7": {
    id: 7,
    title: "Sejarah Masjid Nurul Iman",
    content: `
      <p class="mb-4">Sejarah Masjid Nurul Iman, berawal dari sebuah mushola kecil di Cipedak, Jakarta Selatan, yang kini terus menebarkan manfaat luas bagi seluruh warga sekitar.</p>
    `,
    author: "Ketua DKM 2027 - Didi Suharjo",
    date: "11 Desember 2025",
    category: "Sejarah",
  },
};

interface ArtikelDetailPageProps {
  params: { id: string };
}

export default function ArtikelDetailPage({ params }: ArtikelDetailPageProps) {
  const article = articles[params.id];

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link href="/artikel">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Artikel
          </Button>
        </Link>

        {/* Article Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/artikel">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Lihat Semua Artikel</h3>
                  <p className="text-sm text-gray-600">
                    Jelajahi koleksi artikel lainnya dari Masjid Jogokariyan
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
