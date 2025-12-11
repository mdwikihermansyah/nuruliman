# 🚀 Panduan Deploy ke Vercel

## 📋 Environment Variables yang Diperlukan

Pastikan semua environment variables berikut di-set di Vercel Dashboard:

### Database (Prisma)
```
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...
```

### Clerk Authentication
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### Arcjet (Opsional - untuk production)
```
ARCJET_KEY=ajkey_...
```

> ⚠️ **Catatan**: `ARCJET_KEY` bersifat opsional. Jika tidak di-set, aplikasi tetap bisa build dan berjalan, hanya fitur Arcjet yang tidak aktif.

## 🔧 Langkah-langkah Deploy

### 1. Push ke GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import Project di Vercel
1. Login ke [Vercel Dashboard](https://vercel.com)
2. Klik "Add New Project"
3. Import repository dari GitHub
4. Vercel akan otomatis mendeteksi Next.js

### 3. Set Environment Variables
1. Di halaman project settings, masuk ke "Environment Variables"
2. Tambahkan semua environment variables di atas
3. Pastikan untuk memilih environment yang tepat (Production, Preview, Development)

### 4. Deploy
1. Klik "Deploy"
2. Vercel akan otomatis:
   - Install dependencies
   - Run `prisma generate` (melalui postinstall script)
   - Build aplikasi
   - Deploy ke production

## ⚠️ Troubleshooting

### Build Error: "ARCJET_KEY is required"
- **Solusi**: Set `ARCJET_KEY` di Vercel atau biarkan kosong (aplikasi akan tetap berjalan tanpa Arcjet)

### Build Error: "Prisma Client not generated"
- **Solusi**: Pastikan `postinstall` script di `package.json` berjalan dengan benar
- Vercel akan otomatis menjalankan `prisma generate` setelah `npm install`

### Build Error: "Clerk publishableKey missing"
- **Solusi**: Pastikan `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` sudah di-set di Vercel

### Database Connection Error
- **Solusi**: 
  - Pastikan `DATABASE_URL` dan `DIRECT_URL` sudah benar
  - Pastikan database sudah di-setup dan accessible dari internet
  - Untuk Supabase, gunakan connection pooling URL untuk `DATABASE_URL`

## 📝 Catatan Penting

1. **Prisma Generate**: Script `postinstall` di `package.json` akan otomatis menjalankan `prisma generate` saat build
2. **Environment Variables**: Semua `NEXT_PUBLIC_*` variables harus di-set di Vercel
3. **Database Migrations**: Pastikan migrations sudah di-run sebelum deploy (gunakan `prisma migrate deploy` di production)

## 🔗 Link Berguna

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Prisma on Vercel](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)

