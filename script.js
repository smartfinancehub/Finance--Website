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
        if (toggleButton) toggleButton.innerHTML = "☀️ Light Mode"; // Change button text
    } else {
        if (toggleButton) toggleButton.innerHTML = "🌙 Dark Mode"; // Set default text
    }

    // Toggle dark mode on button click
    if (toggleButton) { // Ensure the button exists before adding event listener
        toggleButton.addEventListener("click", function () {
            // Toggle dark mode for body, footer, and articles
            body.classList.toggle("dark-mode");
            footer.classList.toggle("dark-mode");
            articles.forEach(article => article.classList.toggle("dark-mode"));

            // Change button text based on mode
            if (body.classList.contains("dark-mode")) {
                toggleButton.innerHTML = "☀️ Light Mode";
            } else {
                toggleButton.innerHTML = "🌙 Dark Mode";
            }

            // Save user preference
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    // Back to Top button (if you add am)
    const backToTopButton = document.getElementById("back-to-top");
    if (backToTopButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
// Add this inside the existing "DOMContentLoaded" event listener
const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
    // Show/hide button when scrolling
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    });
}
