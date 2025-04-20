document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("footer button"); // Find the button inside the footer
    const body = document.body;
    const footer = document.querySelector("footer"); // Find the footer
    const articles = document.querySelectorAll("article"); // Find all articles

    // Apply saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        footer.classList.add("dark-mode");
        articles.forEach(article => article.classList.add("dark-mode"));
    }

    // Toggle dark mode on button click
    if (toggleButton) { // Ensure the button exists before adding event listener
        toggleButton.addEventListener("click", function () {
            // Toggle dark mode for body, footer, and articles
            body.classList.toggle("dark-mode");
            footer.classList.toggle("dark-mode");
            articles.forEach(article => article.classList.toggle("dark-mode"));

            // Save user preference
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});
