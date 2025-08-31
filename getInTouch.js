document.addEventListener("DOMContentLoaded", () => {
  fetch("getInTouch.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("contactForm").innerHTML = data;
    })
    .catch(error => console.error("Error loading Contact Form:", error));
});
