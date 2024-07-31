document.addEventListener("DOMContentLoaded", function() {
    const navLinks = 
    document.querySelectorAll('header nav a');
    const sections = 
    document.querySelectorAll('section');

    function changeLinkState(){
        let index = section.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));

        navLinks[index].classList.add('active');

    }
    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});