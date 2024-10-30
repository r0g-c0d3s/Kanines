const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to animate the text
const animateText = (element) => {
    let iterations = 0;
    const interval = setInterval(() => {
        element.innerText = element.innerText
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return element.getAttribute('data-value')[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iterations >= element.getAttribute('data-value').length) {
            clearInterval(interval);
        }
        iterations += 1 / 3; // Adjusting to slow down
    }, 30);
};

// Set up IntersectionObserver for all h1 elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateText(entry.target); // Call the function for the visible element
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

// Observe all h1 elements with data-value attribute
document.querySelectorAll("h1[data-value]").forEach((h1) => {
    observer.observe(h1);
});
