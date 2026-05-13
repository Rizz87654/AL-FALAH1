// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// Tutup menu saat klik link di mobile
const allLinks = document.querySelectorAll('.nav-links a');
allLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// ========== ACTIVE NAVIGATION (berdasarkan halaman) ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
});

// ========== FORM VALIDASI KONTAK ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        let isValid = true;
        
        inputs.forEach(function(input) {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '1px solid #ddd';
            }
        });
        
        if (isValid) {
            alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
            contactForm.reset();
        } else {
            alert('Harap isi semua field yang diperlukan.');
        }
    });
}

// ========== FILTER GALERI ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const galeriItems = document.querySelectorAll('.galeri-full-grid .galeri-item');

if (filterBtns.length > 0) {
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galeriItems.forEach(function(item) {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ========== SMOOTH SCROLL ==========
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Website Al Falah siap digunakan!');