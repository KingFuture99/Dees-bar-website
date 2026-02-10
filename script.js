const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}


const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const clone = item.cloneNode(true);
    clone.removeAttribute("width");
    clone.removeAttribute("height");

    modal.appendChild(clone);
    document.body.appendChild(modal);

    modal.addEventListener("click", () => {
      modal.remove();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => {
    el.style.setProperty("--delay", "0s"); // reset delay
    observer.observe(el);
  });
});



