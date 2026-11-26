# 🛡️ CekFakta Sekolah: Lawan Hoaks & Misinformasi di Grup Kelas

<div align="center">

![Badge Status](https://img.shields.io/badge/Status-Active-success)
![Badge Tech](https://img.shields.io/badge/Tech-Google%20Apps%20Script%20%7C%20Tailwind%20CSS-blue)
![License](https://img.shields.io/badge/License-MIT-green)

*Gerakan literasi digital interaktif untuk membantu pelajar memverifikasi pesan berantai dan hoaks di grup WhatsApp kelas sebelum membagikannya.*

</div>

---

## 📌 Tentang Proyek
**CekFakta Sekolah** adalah aplikasi web interaktif yang dirancang khusus untuk lingkungan sekolah (SMP/SMA/SMK). Platform ini bertujuan mengatasi maraknya penyebaran disinformasi, tautan penipuan (*phishing*), dan berita bohong di kalangan pelajar—terutama di dalam grup obrolan kelas.

Website ini dilengkapi dengan simulator mandiri berbasis indikator verifikasi objektif serta papan laporan terpusat yang terintegrasi dengan Google Sheets sebagai basis data.

---

## ✨ Fitur Utama
1. **Analisis Masalah Terstruktur:** Menjabarkan faktor penyebab (FOMO, *clickbait*), dampak negatif (salah jadwal ujian, perundungan siber), serta pihak terdampak.
2. **Simulator & Kalkulator Cek Fakta (*Saring Sebelum Sharing*):**
   - **Tombol Kasus Cepat:** Contoh instan untuk menguji kasus populer seperti *Info Libur Mendadak*, *Link Kuota Belajar Gratis*, dan *Jadwal Resmi Ujian*.
   - **Skor Kredibilitas Otomatis (0–100):** Dihitung berdasarkan 5 indikator verifikasi dan deteksi pola teks mencurigakan secara otomatis (huruf kapital berlebih, kata "sebarkan", tautan non-resmi).
3. **Papan Laporan Sekolah (Google Sheets Integration):** Menyimpan riwayat pengecekan laporan dari siswa secara online dan terpusat, lengkap dengan filter status (*Hoaks*, *Meragukan*, *Valid*) dan statistik ringkas.

---

## 🛠️ Teknologi yang Digunakan
* **Frontend:** HTML5, Tailwind CSS (via CDN), dan JavaScript (Vanilla).
* **Backend & Database:** Google Apps Script (`Code.gs`) dan Google Sheets.

---

## 📁 Struktur Berkas Proyek
Proyek ini dirancang agar mudah diterapkan di Google Apps Script:
- `Code.gs` — Skrip backend untuk melayani halaman web dan mengelola penyimpanan ke Google Sheets.
- `Index.html` — Tampilan antarmuka utama (*frontend*) menggunakan kerangka Tailwind CSS.
- `JavaScript.html` — Logika kalkulator skor, komunikasi server, dan pengelolaan tabel laporan.

---

## 🚀 Panduan Instalasi & Deploy
Ikuti langkah-langkah berikut untuk memasang aplikasi ini di lingkungan sekolah Anda:

1. **Buat Google Spreadsheet:**
   - Buat spreadsheet baru di Google Drive Anda (misal: `Database_CekFakta_Sekolah`).
   - Buka menu **Ekstensi** > **Apps Script**.
2. **Tambahkan Berkas Kode:**
   - Salin kode `Code.gs` ke editor utama Apps Script.
   - Buat file HTML baru bernama `Index` dan salin kodenya.
   - Buat file HTML baru bernama `JavaScript` dan salin kodenya.
3. **Publikasikan (Deploy):**
   - Klik tombol **Terapkan (Deploy)** > **Deployment baru**.
   - Pilih jenis: **Aplikasi Web (Web app)**.
   - Atur *Jalankan sebagai*: **Saya (Me)**.
   - Atur *Yang memiliki akses*: **Siapa saja (Anyone)**.
   - Klik **Deploy** dan salin URL aplikasi web yang dihasilkan untuk dibagikan kepada siswa dan guru.

---

## 🤝 Kontribusi & Pengembangan
Proyek ini bersifat terbuka untuk edukasi literasi digital. Jika Anda ingin menambahkan fitur baru (seperti sistem verifikasi lanjutan atau integrasi bot WhatsApp), silakan lakukan *fork* pada repositori ini atau sesuaikan skrip Apps Script sesuai kebutuhan sekolah Anda.

---
