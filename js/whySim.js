document.addEventListener("DOMContentLoaded", () => {
    fetch("src/pageSnippets/whySim.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("whySim").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
