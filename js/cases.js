console.log("Cases loaded !");

document.addEventListener("DOMContentLoaded", () => {
    fetch("src/pageSnippets/cases.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("cases").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
