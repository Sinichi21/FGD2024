# Halaman profile Provinsi Bali

Proyek ini dibuat untuk memenuhi tugas akhir pada kelas dasar pemrograman web dari dicoding. Pada proyek ini saya membuat sebuah halaman profile dari provinsi bali. Pada Proyek ini terdapat script slider gambar sederhana dengan navigasi manual dan otomatis, serta menu hamburger responsif untuk perangkat seluler. Berikut adalah penjelasan tentang cara kerja fungsionalitas JavaScript.

## Fitur

- **Slider Otomatis**: Gambar secara otomatis berpindah setiap 4 detik.
- **Navigasi Manual**: Pengguna dapat menjelajahi gambar menggunakan tombol "Sebelumnya" dan "Selanjutnya".
- **Menu Hamburger Responsif**: Menu navigasi menyusut menjadi menu hamburger pada layar kecil. Mengklik ikon hamburger akan mengubah visibilitas tautan navigasi.

## Penjelasan JavaScript

### 1. Fungsionalitas Slider

Slider secara otomatis berpindah antar gambar setiap 4 detik. Pengguna juga dapat menavigasi gambar secara manual menggunakan tombol "Sebelumnya" dan "Selanjutnya".

- `moveSlide(direction)`: Fungsi ini menggerakkan slider ke arah yang ditentukan (baik maju atau mundur). Fungsi ini memperbarui indeks slide saat ini dan menerjemahkan kontainer slider sesuai dengan itu.
- **Pindah Otomatis**: Metode `setInterval` digunakan untuk secara otomatis memindahkan slider ke gambar berikutnya setiap 4 detik.
- **Pindah Manual**: Metode `addEventListener` digunakan untuk mendengarkan klik pada tombol "Sebelumnya" (`.prev`) dan "Selanjutnya" (`.next`), memungkinkan pengguna untuk mengubah slide secara manual.

### 2. Hamburger Menu

Menu hamburger digunakan pada perangkat seluler untuk mengubah visibilitas tautan navigasi. Ketika pengguna mengklik ikon hamburger, elemen **nav-link** akan mengubah antara terlihat dan tersembunyi dengan menggunakan kelas **active**.

### 3. Tombol Navigasi

Tombol "Sebelumnya" **(.prev)** dan "Selanjutnya" **(.next)** digunakan untuk navigasi manual melalui gambar. Tombol-tombol ini ditempatkan di luar kontainer slide, sehingga selalu terlihat terlepas dari slide yang ditampilkan.

## Cara Menggunakan

### 1. Clone atau unduh proyek ini ke mesin lokal Anda.

### 2. Buka file index.html di browser Anda.

### 3. Slider gambar akan mulai berputar secara otomatis.

### 4. Gunakan tombol "Sebelumnya" dan "Selanjutnya" untuk mengubah slide secara manual.

### 5. Pada perangkat seluler, gunakan menu hamburger untuk mengubah visibilitas tautan navigasi.

## Struktur File

### > **index.html**: File HTML utama yang berisi slider dan menu hamburger.

### > **assets/styles/style.css**: File CSS untuk penataan slider, tombol navigasi, dan menu hamburger.

### > **assets/scripts/script.js**: File JavaScript yang berisi fungsionalitas slider dan hamburger.

## Lisensi

Proyek ini bersifat open-source dan dapat digunakan secara gratis di bawah Lisensi MIT.
