// assets/js/rotate.js

document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('header img'); // Select the image in the header
    let angle = 0; // Initial rotation angle

    function rotateImage() {
        angle = (angle + 1) % 360; // Increment angle and keep it within 0-359 degrees
        image.style.transform = `rotate(${angle}deg)`; // Apply rotation
    }

    setInterval(rotateImage, 20); // Rotate every 20 milliseconds
});
