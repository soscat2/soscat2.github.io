// JavaScript to rotate the image
(function() {
    let angle = 0;
    const image = document.getElementById('rotating-image');

    function rotate() {
        angle = (angle + 1) % 360; // Increment angle and wrap around at 360
        image.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate); // Continue the animation
    }

    rotate(); // Start the rotation
})();
