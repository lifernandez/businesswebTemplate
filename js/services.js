console.log("Services loaded !");

document.addEventListener("DOMContentLoaded", () => {
    fetch("src/pageSnippets/services.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("services").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
