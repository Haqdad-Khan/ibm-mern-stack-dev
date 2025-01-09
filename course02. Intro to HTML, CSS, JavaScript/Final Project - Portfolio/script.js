// dynamic time 
document.getElementById('year').textContent = new Date().getFullYear()

// nav toggler 
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// add recommendation section 
// Select the form and the container where new cards will be added
const recommendationForm = document.querySelector('form');
const recommendationsContainer = document.querySelector('#recommendations .grid');

// Handle form submission
recommendationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the form inputs
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if both fields are not empty
    if (!message) {
        alert('Please enter a message.');
        return; // Prevent form submission if message is empty
    }

    // Create a new card element
    const newCard = document.createElement('div');
    newCard.classList.add('bg-white', 'shadow-md', 'border', 'border-gray-300', 'rounded-lg', 'p-6');

    // Set the inner HTML of the new card
    newCard.innerHTML = `
        <p class="text-gray-700 italic">
            “${message}”
        </p>
        ${name ? `<p class="text-right text-gray-700 mt-4">- <strong>${name}</strong></p>` : ''}
    `;

    // Add the new card to the recommendations section
    recommendationsContainer.appendChild(newCard);
    showPopup(true)
    // Clear the form inputs
    recommendationForm.reset();
});

// show pop up
function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
    }
}