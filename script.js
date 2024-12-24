const menuBar = document.getElementById("menu-bar");
const navItems = document.getElementById("navItems");
const navLinks = document.querySelectorAll(".navlinks");
const activeLink = document.getElementById("activLlink");
const contactBtn  = document.getElementById("contact-btn");
const sections = document.querySelectorAll("section");
const formData = document.getElementById("formData")
menuBar.addEventListener("click", () => {
  navItems.classList.toggle("active");

  if (menuBar.classList.contains("fa-bars")) {
    menuBar.classList.remove("fa-bars");
    menuBar.classList.add("fa-times");
  } else {
    menuBar.classList.remove("fa-times");
    menuBar.classList.add("fa-bars");
  }
});

// controls navlinks to hide menubar
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBar.classList.add("fa-bars");
    menuBar.classList.remove("fa-times");
    navItems.classList.remove("active"); // Hide the navbar
  });
});

// Select relevant elements
const arrow = document.querySelector(".arrow-bottom-to-home");
const aboutSection = document.getElementById("about"); // Assuming the About section has an id="about"

// Function to show or hide the arrow based on scroll position
window.addEventListener("scroll", () => {
  const aboutSectionTop = aboutSection.getBoundingClientRect().top;

  if (aboutSectionTop < window.innerHeight * 0.8) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});


// Select all navigation links and sections




contactBtn.addEventListener("click", () => {
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  // Check if any field is empty
  if (!name || !email || !message) {
    alert("Please fill all the fields");
  } else {
    alert("Message sent successfully!");
    form.reset(); // Clear the form inputs after submission
  }
});
 var typed = new Typed('#typeWritter', {
  strings: ['Frontend Website Developer.', "Web Desginer."],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});






