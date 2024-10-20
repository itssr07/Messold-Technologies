// Slider for images
const slides = document.querySelector('.slider');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showSlide(index) {
    currentIndex = (index + slideCount) % slideCount; // Loop back to the start
    const offset = -currentIndex * (100 / slideCount); // Calculate offset
    slides.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Optional: Auto slide every 3 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);


// Read More functionality
const readMoreBtn = document.getElementById('read-more');
const extraText = document.getElementById('extra-text');

readMoreBtn.addEventListener('click', function () {
    // Check if the extra text is currently hidden
    if (extraText.style.display === 'none') {
        // Show the extra text and change the button to 'Read Less'
        extraText.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        // Hide the extra text and change the button to 'Read More'
        extraText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});



