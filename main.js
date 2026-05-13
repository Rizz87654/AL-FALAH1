// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Tutup menu saat klik link di mobile
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// ========== ACTIVE NAVIGATION (berdasarkan halaman) ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
});

// ========== FORM VALIDASI KONTAK ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        let isValid = true;
        
        inputs.forEach(input => {
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
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galeriItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ========== ANIMASI SCROLL (stats) ==========
const statNumbers = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.stats-section');
let animated = false;

const animateNumbers = () => {
    statNumbers.forEach(stat => {
        const text = stat.innerText;
        const target = parseInt(text.replace(/[^0-9]/g, ''));
        if (!isNaN(target)) {
            let current = 0;
            const increment = target / 50;
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.floor(current) + (text.includes('+') ? '+' : '');
                    requestAnimationFrame(updateNumber);
                } else {
                    stat.innerText = target + (text.includes('+') ? '+' : '');
                }
            };
            updateNumber();
        }
    });
};

if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateNumbers();
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

// ========== SMOOTH SCROLL (untuk anchor link di halaman yang sama) ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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