document.addEventListener("DOMContentLoaded", () => {
    fetch("src/pageSnippets/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading head tag:", error));
});
