"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

// * Mock data artikel - nanti bisa diganti dengan data dari database
const articles = [
  {
    id: 1,
    title: "Manajemen Masjid Zaman Rasulullah",
    excerpt:
      "Pelajari bagaimana manajemen masjid yang diterapkan pada zaman Rasulullah SAW dan aplikasinya di zaman modern.",
    author: "Ustadz Ahmad",
    date: "15 Desember 2024",
    category: "Manajemen",
  },
  {
    id: 2,
    title: "Pentingnya Transparansi Keuangan Masjid",
    excerpt:
      "Transparansi keuangan masjid adalah kunci untuk membangun kepercayaan jamaah dan memastikan amanah tersalurkan dengan baik.",
    author: "Ustadzah Fatimah",
    date: "10 Desember 2024",
    category: "Keuangan",
  },
  {
    id: 3,
    title: "Program Dakwah Masjid Nurul Iman",
    excerpt:
      "Berbagai program dakwah yang telah dilaksanakan Masjid Jogokariyan untuk membangun ummat dan mensejahterakan masyarakat.",
    author: "Tim Dakwah",
    date: "5 Desember 2024",
    category: "Dakwah",
  },
  {
    id: 4,
    title: "Kampoeng Ramadhan: Menjaga Tradisi, Membangun Ummat",
    excerpt:
      "Kisah sukses program Kampoeng Ramadhan yang menjadi event tahunan Masjid Nurul Iman dengan berbagai kegiatan menarik.",
    author: "Panitia Ramadhan",
    date: "1 Desember 2024",
    category: "Event",
  },
  {
    id: 5,
    title: "ATM Beras: Inovasi Program Sosial Masjid",
    excerpt:
      "Program ATM Beras sebagai salah satu inovasi Masjid Nurul Iman dalam membantu masyarakat yang membutuhkan.",
    author: "Tim Sosial",
    date: "25 November 2024",
    category: "Sosial",
  },
  {
    id: 6,
    title: "Peran Masjid dalam Pemberdayaan Masyarakat",
    excerpt:
      "Bagaimana masjid dapat menjadi pusat pemberdayaan masyarakat melalui berbagai program yang terstruktur dan berkelanjutan.",
    author: "Ustadz Muhammad",
    date: "20 November 2024",
    category: "Pemberdayaan",
  },
  {
    id: 7,
    title: "Sejarah Masjid Nurul Iman",
    excerpt:
      "Sejarah Masjid Nurul Iman, berawal dari sebuah mushola kecil di Cipedak, Jakarta Selatan, yang kini terus menebarkan manfaat luas bagi seluruh warga sekitar.",
    author: "Ketua DKM 2027 - Didi Suharjo",
    date: "11 Desember 2025",
    category: "Sejarah",
  },
];

export default function ArtikelPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleArticles = articles.filter(
    (article) => article.id <= visibleCount
  );

  const hasMore = articles.some((article) => article.id > visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Artikel
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kumpulan artikel dan tulisan tentang manajemen masjid, dakwah, dan
            berbagai program yang dilaksanakan Masjid Nurul Iman.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArticles.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-lg transition-shadow flex flex-col"
            >
              <CardHeader>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2 line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <Link href={`/artikel/${article.id}`} className="mt-4">
                  <Button variant="outline" className="w-full group">
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={handleLoadMore}>
              Muat Artikel Lainnya
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
