console.log("About loaded !");

document.addEventListener("DOMContentLoaded", () => {
    fetch("src/pageSnippets/about.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("about").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
