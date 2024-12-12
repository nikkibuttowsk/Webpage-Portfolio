const menu = document.querySelector('#mobile-menu')
const menuLInks = document.querySelector('.navbar__menu')

menu.addEventListener ('click', function(){
    menu.classList.toggle('is.active');
    menuLInks.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section:not(#home)"); // Exclude #home
  
    const revealSection = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
  
        // Add active class when section is in view
        if (sectionTop < windowHeight / 1.3 && sectionBottom > windowHeight / 4) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", revealSection);
  
    // Initial check to reveal sections already in view
    revealSection();
  });
  