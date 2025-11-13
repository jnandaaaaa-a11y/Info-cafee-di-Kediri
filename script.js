// script.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. Menambahkan Interaktivitas pada Tombol Pesan Sekarang
    const orderButtons = document.querySelectorAll('.produk-item button');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ambil nama kue dari elemen <h3> terdekat
            const productName = this.parentElement.querySelector('h3').textContent;
            
            // Tampilkan notifikasi
            alert(`Terima kasih! Pesanan untuk "${productName}" telah diterima. Kami akan segera menghubungi Anda.`);
            
            // Anda bisa menambahkan logika yang lebih kompleks di sini, 
            // seperti menambahkannya ke keranjang belanja.
        });
    });
    
    // 2. Efek Sticky Navigasi
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    
    // Hitung posisi awal navigasi (setelah header)
    let stickyOffset = nav.offsetTop;

    function handleStickyNav() {
        // Jika posisi gulir (scroll) lebih besar atau sama dengan posisi awal navigasi
        if (window.pageYOffset >= stickyOffset) {
            nav.classList.add("sticky");
            // Tambahkan padding ke body agar konten tidak "meloncat" saat nav menjadi sticky
            document.body.style.paddingTop = nav.offsetHeight + 'px';
        } else {
            nav.classList.remove("sticky");
            document.body.style.paddingTop = 0;
        }
    }

    // Panggil fungsi setiap kali pengguna menggulir
    window.addEventListener('scroll', handleStickyNav);

    // Panggil fungsi saat jendela diubah ukurannya atau dimuat ulang
    window.addEventListener('resize', () => {
        // Reset offset dan padding saat ukuran jendela berubah
        stickyOffset = nav.offsetTop;
        handleStickyNav();
    });
});
