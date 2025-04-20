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
