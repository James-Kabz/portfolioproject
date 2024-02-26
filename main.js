document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const mobileLinks = document.querySelector(".mobile-links");

    navToggle.addEventListener("click", function () {
        mobileLinks.classList.toggle("hidden");
        
    });
    
    mobileLinks.addEventListener("click", function () {
        mobileLinks.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

