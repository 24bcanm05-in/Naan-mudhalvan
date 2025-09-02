// Toggle mobile menu

const menu Toggle = document.get ElementById("menu-toggle"); const navLinks = document.getEle mentById("nav-links");

menu Toggle.addEvent Listener("click", () => {

navLinks.classList.toggle("show"); });

// Simple contact form validation const contactForm = document.ge tElementById("contact-form"); const formStatus = document.getE lementById("form-status");

contactForm.addEventL istener("submit", (e) =>