const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');        
        menuOpen = true;
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById(".dropdown-content").classList.toggle("show");

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.getElementById("myDropdown").classList.toggle("show");
    }
});


