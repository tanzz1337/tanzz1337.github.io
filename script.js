document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        // Toggle menu saat tombol diklik
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Sembunyikan menu saat link navigasi diklik (untuk navigasi yang smooth)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Fungsionalitas Navigasi Mobile (TIDAK BERUBAH)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Fungsionalitas GALERI SLIDER BARU
    const slider = document.getElementById('gallery-slider');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const items = document.querySelectorAll('.gallery-item');

    if (slider && items.length > 0) {
        let currentIndex = 0;

        // Fungsi untuk menggeser slider
        const updateSlider = () => {
            const itemWidth = slider.querySelector('.gallery-item').clientWidth;
            // Gunakan scrollLeft untuk menggeser
            slider.scrollLeft = currentIndex * itemWidth;
        };

        // Geser ke item berikutnya
        nextBtn.addEventListener('click', () => {
            if (currentIndex < items.length - 1) {
                currentIndex++;
            } else {
                // Kembali ke awal
                currentIndex = 0;
            }
            updateSlider();
        });

        // Geser ke item sebelumnya
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                // Kembali ke akhir
                currentIndex = items.length - 1;
            }
            updateSlider();
        });

        // Inisialisasi posisi slider saat halaman dimuat
        updateSlider(); 
    }
});