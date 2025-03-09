document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if user has a saved preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save user preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Load footer dynamically
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});
