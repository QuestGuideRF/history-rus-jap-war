document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMenu = document.getElementById('close-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeMenu.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    });
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    const navigation = document.getElementById('navigation');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 768) {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                navigation.classList.add('hidden');
            } else {
                navigation.classList.remove('hidden');
            }
        }
        lastScrollY = window.scrollY;
    });
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});