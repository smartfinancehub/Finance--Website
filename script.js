document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Apply saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Toggle dark mode on button click
    if (toggleButton) { // Ensure the button exists before adding event listener
        toggleButton.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            // Save user preference
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    // Load footer dynamically if element exists
    const footerDiv = document.getElementById("footer");
    if (footerDiv) {
        fetch("footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Footer not found");
                return response.text();
            })
            .then(data => footerDiv.innerHTML = data)
            .catch(error => console.error("Error loading footer:", error));
    }
});
