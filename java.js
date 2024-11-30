/* Animacion*/
document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});


    document.addEventListener('DOMContentLoaded', function () {
        // Seleccionamos todos los enlaces del menú y el botón para desplegar el menú
        var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        var navbarCollapse = document.querySelector('.navbar-collapse');

        // Agregamos un evento 'click' a cada enlace del menú
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                // Después de hacer click, cerramos el menú (fino)
                if (navbarCollapse.classList.contains('show')) {
                    var collapse = new bootstrap.Collapse(navbarCollapse);
                    collapse.hide();
                }
            });
        });
    });



    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.querySelector('.navbar'); // Selecciona el navbar
        let lastScrollTop = 0;
    
        if (!navbar) {
            console.warn("Navbar no encontrado");
            return;
        }
    
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY; // Posición actual del scroll
    
            // Ocultar o mostrar el navbar según la dirección del scroll
            if (scrollY > lastScrollTop) {
                navbar.classList.add('hidden-navbar'); // Desplazamiento hacia abajo (ocultar)
            } else {
                navbar.classList.remove('hidden-navbar'); // Desplazamiento hacia arriba (mostrar)
            }
    
            // Añadir o eliminar la clase 'custom-navbar' según la posición del scroll
            if (scrollY === 0) {
                navbar.classList.remove('custom-navbar'); // Eliminar si está en el tope
            } else {
                navbar.classList.add('custom-navbar'); // Añadir si está haciendo scroll
            }
    
            lastScrollTop = scrollY; // Actualiza la última posición del scroll
        });
    });
    
    
    
    
   