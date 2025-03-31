document.addEventListener("DOMContentLoaded", function () {
    const bgElement = document.querySelector(".beginning"); // Adjust class name if needed
    const img = new Image();
    img.src = "../Images/amsback.jpg"; // Use the correct path to your image

    img.onload = function () {
        bgElement.style.backgroundImage = `url(${this.src})`;
        bgElement.style.opacity = "1"; // Fade in effect
    };
});

