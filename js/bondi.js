const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: "smooth",
    });

    // إزالة الـ # من الـ URL
    history.replaceState(null, "", window.location.pathname);

    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });

    bsCollapse.hide();
  });
});
// AOS Library
AOS.init({
  duration: 1000,
  once: true,
});
