// Get the element with id 'animatedBox'
const animatedBox = document.getElementById('animatedBox');

// Function to change background color
function animateBackgroundColor() {
    let colors = ['#90EE90', '#FF6347', '#FFD700', '#ADD8E6', '#98FB98']; // Array of colors
    let index = 0; // Start at the first color

    // Function to change color every 2 seconds
    setInterval(() => {
        animatedBox.style.backgroundColor = colors[index]; // Change the background color
        index = (index + 1) % colors.length; // Move to the next color in the array, loop back at the end
    }, 2000); // 2-second interval
}

// Call the function to start the animation when the page loads
animateBackgroundColor();
