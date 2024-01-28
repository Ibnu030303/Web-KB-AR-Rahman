
var navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    var currentScrollPos = this.window.scrollY;

    this.document.querySelectorAll('section').forEach(function(section, index) {
        var sectionTop = section.offsetTop - 72;
        var sectionButtom = sectionTop + section.offsetHeight;

        if (currentScrollPos >= sectionTop && currentScrollPos < sectionButtom) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            navLinks[index].classList.add('active');
        }
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});