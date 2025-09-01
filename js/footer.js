console.log("Footer loaded !");

document.addEventListener("DOMContentLoaded", () => {
  fetch("src/pageSnippets/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});
