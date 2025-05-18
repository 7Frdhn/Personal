/*========== menu icon navbar ==========*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*========== scroll sections active link ==========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height ) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
      })
    };
  });

    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.onclick = () => {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };
    

};
/*========== swiper ==========*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkmode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
};

/*========== scroll reveal ==========*/
ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: '2000',
  delay: '200' 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .service-container, .portfolio-box, .testimonial-wrapper, .kontak form',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .tentang-img img',{ origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .tentang-content',{ origin: 'right' });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


     // Tunggu semua gambar dimuat
     imagesLoaded('.isotope-container', function () {
      // Inisialisasi Isotope
      const iso = new Isotope('.isotope-container', {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry'
      });
  
      // Event filter
      document.querySelectorAll('.isotope-filters li').forEach(button => {
        button.addEventListener('click', function () {
          // Ubah class filter-active
          document.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
  
          // Filter item
          const filterValue = this.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
        });
      });
    });

    function sendMail() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("user_message").value;
    
      console.log("Sending email with:", name, email, message);
    
      let parms = {
        name: name,
        email: email,
        user_message: message,
      };
    
      emailjs.send("service_gn9mkqo", "template_64dpvlh", parms)
        .then(function(response) {
          alert("Email terkirim!");
          console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
          alert("Gagal mengirim email.");
          console.error("FAILED...", error);
        });
    }    