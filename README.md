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
Project web ini adalah aplikasi simulasi Sistem Manajemen Gudang statis yang digunakan untuk mendata barang masuk. Web ini dibangun menggunakan teknologi dasar web: HTML5, CSS3, JavaScript, dan Bootstrap 5 (sebagai styling framework agar UI responsif secara modern).

## Fitur dan Kriteria yang Terpenuhi

### 1. Minimal 5 Halaman HTML (.html)
Proyek ini memiliki struktur halaman berikut:
1. `index.html` : Halaman Dashboard utama dengan statistik.
2. `items.html` : Halaman Daftar Barang.
3. `add-item.html` : Halaman Form Input Barang.
4. `about.html` : Halaman Profil Sistem (berisi Video).
5. `contact.html` : Halaman Hubungi Dukungan/Support.

### 2. Memuat Elemen Wajib HTML
- **Hyperlink (`<a>`)** : Digunakan pada Navbar untuk navigasi antar 5 halaman dan tombol akses cepat di Dashboard.
- **Image (`<img>`)** : Digunakan di Dashboard (`index.html`) sebagai gambar hero pergudangan.
- **Table (`<table>`)** : Digunakan di halaman `items.html` untuk menampilkan daftar stok barang.
- **Form (`<form>`)** : Digunakan pada `add-item.html` untuk menambah barang dan `contact.html` untuk mengirim pesan support.
- **Video (`<video>`)** : Digunakan di halaman `about.html` untuk menampilkan profil sistem (memakai placeholder).

### 3. Tiga (3) Blok Kode JavaScript
Logika JavaScript disimpan pada file tunggal `js/script.js` agar rapi, dan terbagi ke dalam 3 fungsi utama:
1. **Real-time Clock & Dynamic DOM Manipulation** : Terletak pada halaman `index.html`. Script ini menjalankan jam waktu nyata dan sapaan waktu otomatis berdasarkan jam sistem.
2. **Search Filter Table** : Terletak pada `items.html`. Memungkinkan user mencari barang di tabel secara real-time. Jika diketik, tabel otomatis membuang baris yang tidak cocok dengan kata kunci.
3. **Form Validation (Validasi Form)** : Terletak pada `add-item.html`. Fungsi ini menahan submit bawaan HTML (`e.preventDefault()`), memeriksa apakah isian form (nama barang, stok tidak negatif), lalu memberikan feedback berupa notifikasi (Alert Bootstrap) kepada pengguna.

### 4. Tampilan dan Layout Modern dengan CSS
Tampilan tidak hanya menggunakan kelas bawaan Bootstrap. Terdapat file khusus `css/style.css` untuk:
- Menggunakan font Google (*Inter*).
- Membuat skema warna modern (Indigo & Slate) agar tidak terlihat seperti template *slop* generik.
- Memberikan efek interaksi halus seperti hover bayangan (*soft shadows*) pada kotak *cards* dan tombol.
- Micro-animations seperti `fade-in` ketika halaman diload.

## Cara Menjalankan Project
Tidak diperlukan server khusus atau *database* (karena ini *static web*).
1. Ekstrak atau *clone* direktori proyek ini.
2. Buka folder proyek.
3. *Double-click* file `index.html` dan browser akan terbuka secara otomatis menampilkan sistem.

---
*Dokumentasi ini disusun untuk mempermudah saat demo presentasi.*
