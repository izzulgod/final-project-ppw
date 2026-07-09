# Final Project UAS: Pengenalan Perancangan Web

## Tema Project
**Sistem Inventaris Gudang (NexaInventory)**

## Dibuat Oleh
- Nama: Amri Abdil Wahab
- NIM: 25.12.3719

---

- Nama: Muhammad Izzul Fahmi Mustofa
- NIM: 25.12.3693

---

- Nama: Slamet Ihsan Nurdin
- NIM: 25.12.3690

---

- Nama: Farid Ahnaf Fauzi
- NIM: 25.12.3695

---

## Penjelasan Singkat Web
Project web ini adalah aplikasi Sistem Manajemen Gudang statis (**NexaInventory**) dengan fitur mutakhir berbasis klien. Web ini dibangun menggunakan teknologi dasar web: HTML5, CSS3, JavaScript, dan Bootstrap 5 (dilengkapi Bootstrap Icons) serta didukung oleh penyimpanan lokal (**LocalStorage**) untuk mensimulasikan persistensi data tanpa database server.

## Fitur dan Kriteria yang Terpenuhi

### 1. Minimal 5 Halaman HTML (.html)
Proyek ini memiliki struktur halaman berikut:
1. `index.html` : Halaman Dashboard utama dengan statistik stok dinamis.
2. `items.html` : Halaman Daftar Barang dengan fitur pencarian, edit, dan hapus.
3. `add-item.html` : Halaman Form Input Barang baru dengan validasi instan.
4. `about.html` : Halaman Profil Sistem (berisi Video profil).
5. `contact.html` : Halaman Hubungi Dukungan/Support dengan formulir pesan.

### 2. Memuat Elemen Wajib HTML
- **Hyperlink (`<a>`)** : Navigasi antar halaman di Navbar, tautan pintasan dashboard, serta tautan notifikasi.
- **Image (`<img>`)** : Ilustrasi representasi visual pergudangan di halaman utama.
- **Table (`<table>`)** : Tabel daftar barang pada halaman `items.html` yang ter-render secara dinamis dari LocalStorage.
- **Form (`<form>`)** : Form tambah barang pada `add-item.html` dan form kontak pada `contact.html`.
- **Video (`<video>`)** : Profil interaktif sistem yang disematkan di halaman `about.html`.

### 3. Integrasi LocalStorage (Persistensi Data)
- **Data Default** : Sistem otomatis mengisi data inventaris awal jika LocalStorage masih kosong.
- **CRUD Statis** : Penambahan, pembaruan (Edit), dan penghapusan (Delete) barang tersimpan secara permanen di browser pengguna.
- **Pesan Kontak** : Kiriman pesan dari formulir kontak disimpan langsung ke dalam LocalStorage.

### 4. Empat (4) Blok Kode JavaScript
Logika JavaScript disimpan pada file tunggal script.js dan terbagi ke dalam 4 fungsionalitas utama:
1. **Real-time Clock, Sapaan Dinamis & Statistik Dashboard** : Menampilkan jam digital real-time, sapaan dinamis berdasarkan waktu lokal (pagi/siang/sore/malam), serta kalkulasi statistik stok barang secara langsung (Total Barang, Stok Aman, Hampir Habis, dan Kosong).
2. **Table Rendering, Search Filter, Edit & Delete** : Merender data barang secara dinamis ke tabel HTML, menyaring baris berdasarkan kata kunci pencarian secara instan, mengedit detail barang via Bootstrap Modal, serta menghapus barang dengan dialog konfirmasi.
3. **Form Validation & Add Item** : Melakukan validasi input form (nama barang wajib diisi, kategori wajib dipilih, stok tidak boleh negatif, harga valid), menampilkan notifikasi alert Bootstrap yang anggun, dan menyimpan barang baru ke LocalStorage dengan pembuatan SKU otomatis (`SKU-XXXX`).
4. **Contact Form Handling** : Memvalidasi formulir kontak dan menyimpan pesan yang dikirim oleh pengguna ke LocalStorage, lengkap dengan timestamp waktu pengiriman.

### 5. Tampilan dan Layout Modern dengan CSS
Tampilan diperindah menggunakan file CSS khusus style.css untuk:
- Menggunakan tipografi modern (Google Font *Inter*).
- Skema warna elegan (Indigo & Slate) dengan aksen warna status (Emerald, Amber, Rose).
- Interaksi modern berupa *soft shadows*, transisi mulus saat *hover* tombol/kartu, dan kustomisasi gaya Alert.
- Micro-animations seperti efek transisi `fade-in` saat memuat halaman.

---
*Dokumentasi ini disusun untuk mempermudah saat demo presentasi UAS.*
