document.addEventListener("DOMContentLoaded", () => {
  fetch("src/pageSnippets/getInTouch.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("contact").innerHTML = data;
    })
    .catch(error => console.error("Error loading Contact Form:", error));
});
