console.log("header loaded");

document.addEventListener("DOMContentLoaded", () => {
  fetch("../../head.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("head").innerHTML = data;
    })
    .catch(error => console.error("Error loading head tag:", error));
});
