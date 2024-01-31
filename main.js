document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const mobileLinks = document.querySelector(".mobile-links");

    navToggle.addEventListener("click", function () {
        mobileLinks.classList.toggle("hidden");
        
    });
    // setTimeout(function () {
    //     mobileLinks.classList.toggle("hidden");
    // }, 3000);
    
    mobileLinks.addEventListener("click", function () {
        mobileLinks.classList.toggle("hidden");
    });
});

