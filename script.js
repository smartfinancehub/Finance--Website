document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("footer button"); // Find the button inside the footer
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
});
